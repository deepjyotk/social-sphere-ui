import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { GetTweetBySpecificUserModel } from 'src/app/models/get-tweet-specific-user.model';
import { Service } from 'src/app/models/service.model';
import { SharedService } from 'src/app/service/shared.service';
import { TweetService } from 'src/app/service/tweet.service';
import { UserInfoResponseModel } from 'src/app/user/register/register';
import { AddCommentPopupComponent } from '../add-comment-popup/add-comment-popup.component';
import { ViewMyCommentsComponent } from '../view-my-comments/view-my-comments.component';

export interface ViewCommentDialogData {
  comments: string[];
}

export interface AddCommentDialogData {
  tweetId: string;
  token: string;
}

@Component({
  selector: 'app-view-my-tweets',
  templateUrl: './view-my-tweets.component.html',
  styleUrls: ['./view-my-tweets.component.css'],
})
export class ViewMyTweetsComponent implements OnInit {
  constructor(
    private tweetService: TweetService,
    private sharedservice: SharedService,
    private router: Router,
    private datepipe: DatePipe,
    private matDialog: MatDialog
  ) {
    this.userList = sharedservice.sharedCustomer;
  }

  ngOnInit(): void {
    this.getAllTweets(this.userList.userId);
  }
  userList: UserInfoResponseModel;
  tweetList: GetTweetBySpecificUserModel[];
  createdDate: any;
  show: false;

  addCommentPopUp(tweet: GetTweetBySpecificUserModel) {
    this.matDialog.open(AddCommentPopupComponent, {
      data: {
        tweetId: tweet.tweetId,
        token: this.userList.token,
      },
    });
  }
  openCommentsPopUp(tweet: GetTweetBySpecificUserModel) {
    this.getAllTweets(this.userList.userId);
    this.matDialog.open(ViewMyCommentsComponent, {
      autoFocus: false,
      maxHeight: '90vh',
      data: {
        comments: tweet.tweetComments,
        token: this.userList.token,
      },
    });
  }

  likeTweet(tweetId: string) {
    this.tweetService.likeTweet(tweetId, this.userList.token).subscribe(
      (data: Service) => {
        console.log(data.result);
        let result = data.result as boolean;

        if (result) {
          this.getAllTweets(this.userList.userId);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAllTweets(userId: string) {
    this.tweetService.getUserTweets(userId, this.userList.token).subscribe(
      (data: Service) => {
        console.log(data.result);
        this.tweetList = data.result as GetTweetBySpecificUserModel[];

        for (var tweet of this.tweetList) {
          tweet.tweetTime = moment(tweet.tweetTime).format('MM/DD/YYYY');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  viewMyComment(tweetId: any) {
    this.router.navigateByUrl('/viewmycomment/' + tweetId);
  }
}

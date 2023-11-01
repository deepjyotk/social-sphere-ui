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

@Component({
  selector: 'app-show-user-tweets',
  templateUrl: './show-user-tweets.component.html',
  styleUrls: ['./show-user-tweets.component.css']
})
export class ShowUserTweetsComponent implements OnInit {

  tweetId:any
  likesCount:any
  searchText:any;
  userId:any;
  show = false;

  userList: UserInfoResponseModel;
  tweetList: GetTweetBySpecificUserModel[];
  createdDate: any;

  constructor(private tweetService:TweetService,private sharedservice:SharedService, private route:Router, private matDialog: MatDialog) {
    this.userList=sharedservice.sharedCustomer
    this.userId=this.userList.emailId;


  }
  submitSearchRequest(){
    if(this.searchText==null || this.searchText?.length ==0 )return;

    this.tweetService.getUserTweets(this.searchText,this.userList.token).subscribe(
        (data)=>{

            this.tweetList = data.result as  GetTweetBySpecificUserModel[];
        },
        (error)=>{
          console.error(error);
        }
    );

   }

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


  ngOnInit(): void {

    this.getAllOtherUserTweetList(this.userList.emailId);

  }

  getAllOtherUserTweetList(userId:any){
    this.tweetService.getOtherUserTweets(userId).subscribe(
      data =>{
          this.tweetList=data;
          console.log(this.tweetList);
      }
    )
  }



  comment(tweetId:any,userId:any){
    console.log(tweetId);
    console.log(userId);
    this.userList=this.sharedservice.sharedCustomer
    this.route.navigateByUrl('comment/'+tweetId);
  }


}

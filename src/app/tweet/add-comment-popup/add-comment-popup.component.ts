import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetTweetBySpecificUserModel } from 'src/app/models/get-tweet-specific-user.model';
import { Service } from 'src/app/models/service.model';
import { SharedService } from 'src/app/service/shared.service';
import { TweetService } from 'src/app/service/tweet.service';
import { UserInfoResponseModel } from 'src/app/user/register/register';
import { ViewMyCommentsComponent } from '../view-my-comments/view-my-comments.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AddCommentRequestModel } from 'src/app/models/add-comment';
import { AddCommentDialogData } from '../view-my-tweets/view-my-tweets.component';


@Component({
  selector: 'app-add-comment-popup',
  templateUrl: './add-comment-popup.html',
  styleUrls: ['./add-comment-popup.css']
})
export class AddCommentPopupComponent implements OnInit {

  constructor(private tweetService:TweetService,private sharedservice:SharedService, private router:Router, private datepipe:DatePipe,
     private  matDialog : MatDialog,   @Inject(MAT_DIALOG_DATA) public data: AddCommentDialogData, public dialogRef: MatDialogRef<AddCommentPopupComponent>) {

   }

   addCommentForm:FormGroup;

  ngOnInit(): void {
    this.addCommentForm =  new FormGroup({
      'addcommentField': new FormControl('', Validators.required)
    });

  }
  userList:UserInfoResponseModel;
  tweetList: GetTweetBySpecificUserModel[];
  createdDate:any;
  show:false;


  public addCommentField() : FormControl{
  return this.addCommentForm.get('addcommentField') as FormControl;
}

  async onSubmit(){
    let model: AddCommentRequestModel ={
        comment : this.addCommentField().value,
        tweetId :this.data.tweetId
    };
    this.tweetService.addComment(model, this.data.token).subscribe(
      (data: Service)=>{
        console.log(data.result);
         let result =data.result as boolean;

          if(result){
            // this.getAllTweets(this.userList.userId);
            this.dialogRef.close();
          }

       },
       (error) =>{
         console.error(error);
       }
    )
  }


  }



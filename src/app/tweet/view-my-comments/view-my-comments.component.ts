import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { TweetService } from 'src/app/service/tweet.service';
import { ViewCommentDialogData } from '../view-my-tweets/view-my-tweets.component';

@Component({
  selector: 'app-view-my-comments',
  templateUrl: './view-my-comments.component.html',
  styleUrls: ['./view-my-comments.component.css']
})
export class ViewMyCommentsComponent implements OnInit {
  commentList:string[];
  tweetId:any;
  loggedUserDetails:any;
  commentcheck=false;

 constructor(private router:Router, private tweetService:TweetService,
   private actRoute:ActivatedRoute,private sharedservice:SharedService,public dialog: MatDialog ,
  @Inject(MAT_DIALOG_DATA) public data: any
   ) {
      let dd = data as ViewCommentDialogData;
      this.commentList = dd.comments;

   }

 ngOnInit(): void {
  //  this.tweetId = this.actRoute.snapshot.params.tweetId;
  //  console.log(this.tweetId);
  //  this.getComments();
  //  this.loggedUserDetails=this.sharedservice.sharedCustomer
 }

 form: FormGroup = new FormGroup({
   comment: new FormControl('',[Validators.required, Validators.maxLength(144)]),
   TweetId: new FormControl('',),
   UserId: new FormControl('',),
 });

 addComment(){
  this.router.navigateByUrl('/login');
  this.tweetService.addComment
 }

 getComments(){
   this.tweetService.getComments(this.tweetId).subscribe(
     data=>{
       if(data != null){
        this.commentList=data;
        console.log(this.commentList);

       }
       else{
         this.commentcheck=true;
       }


     }
   )

 }




}

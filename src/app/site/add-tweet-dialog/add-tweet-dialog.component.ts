import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-add-tweet-dialog',
  templateUrl: './add-tweet-dialog.component.html',
  styleUrls: ['./add-tweet-dialog.component.css']
})
export class AddTweetDialogComponent implements OnInit {

  loggedInUserDetails:any;
  tweetId:number;
  form: FormGroup;
  constructor(
   private router:Router,
    private sharedService:SharedService,private tweetService:TweetService, private actRoute:ActivatedRoute,) { }

  ngOnInit(): void {
    this.loggedInUserDetails=this.sharedService.sharedCustomer;
    console.log(this.loggedInUserDetails);
    this.tweetId = this.actRoute.snapshot.params.tweetId;

    this.form = new FormGroup({
      Comments: new FormControl('',[Validators.required, Validators.maxLength(144)]),
      UserId: new FormControl('',),
    });
  }

  hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  addComment(){
    this.form.value.UserId = this.loggedInUserDetails.firstname;
    console.log(this.form.value);
    console.log(this.form.value.comment)
    // this.tweetService.addComment(this.form,this.tweetId).subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // )

    this.router.navigateByUrl('comment/'+this.tweetId);

  }
}

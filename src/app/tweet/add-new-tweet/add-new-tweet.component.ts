import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddTweetRequestModel, AddTweetResponseModel } from 'src/app/models/add-tweet.model';
import { Service } from 'src/app/models/service.model';
import { SharedService } from 'src/app/service/shared.service';
import { TweetService } from 'src/app/service/tweet.service';
import { UserInfoResponseModel } from 'src/app/user/register/register';

@Component({
  selector: 'app-add-new-tweet',
  templateUrl: './add-new-tweet.component.html',
  styleUrls: ['./add-new-tweet.component.css']
})
export class AddNewTweetComponent implements OnInit {

  constructor(private service:SharedService, private datepipe: DatePipe,private tweetservice:TweetService,private router:Router) {
    this.user_details=this.service.sharedCustomer;

  }

  @Input() user_details:UserInfoResponseModel;
  form: FormGroup;
  date:Date;
  ngOnInit(): void {


    this.form = new FormGroup({
      UserTweets: new FormControl('',[Validators.required, Validators.maxLength(800)]),
      UserId: new FormControl('',),
      UserName: new FormControl('',),
      CreatedDate: new FormControl((new Date())),
      Likes: new FormControl('',),
      Dislikes: new FormControl('',),
    });

    console.log(this.user_details);
  }

  hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }



  onSubmit()
{
  this.date=new Date();
  let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  this.form.value.UserId=this.user_details.userId;
  this.form.value.UserName=this.user_details.firstName;
  this.form.value.CreatedDate=latest_date;
  this.form.value.Likes=0;
  this.form.value.Dislikes=0;
  console.log(this.form.value);

  var addTweetRequest : AddTweetRequestModel = {
    tweetText : this.form.value.UserTweets,
    userId : this.user_details.userId
  };
  this.tweetservice.addTweet(addTweetRequest,this.user_details.token).subscribe(
    (data: Service) => {
      console.log(data.result);
        this.router.navigateByUrl("/viewMyTweets");
    },
    error=>{
      console.error(error);

    }
  );
}

}


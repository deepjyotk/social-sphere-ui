import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  userDetails:any;
  userList:any;
  constructor(private router:Router,private service:SharedService) { }

  ngOnInit(): void {
    this.userDetails=this.service.sharedCustomer;
  }

  
  users = [
    {Name:'Add New'},
    {Name:'View My Posts'},
    {Name:'View All Users'},
    {Name: 'View All Tweets'}
  ];

  addNewPost(){
    this.userDetails=this.service.sharedCustomer;
    console.log(this.userDetails);
    this.router.navigateByUrl("/addnewtweet");
  }

  viewMyPosts(){
    this.userList=this.service.sharedCustomer;
    console.log(this.userList);
    this.router.navigateByUrl('/viewMyTweets');
  }

  viewAllUserTweets(){
    this.userList=this.service.sharedCustomer;
    console.log(this.userList);
    this.router.navigateByUrl('/viewothertweets');
  }
}

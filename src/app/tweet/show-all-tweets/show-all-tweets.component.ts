import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogService } from 'src/app/service/dialog.service';
import { SharedService } from 'src/app/service/shared.service';
import { TweetService } from 'src/app/service/tweet.service';
import { DialogComponent } from 'src/app/site/dialog/dialog.component';
import { UserInfoResponseModel } from 'src/app/user/register/register';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-show-all-tweets',
  templateUrl: './show-all-tweets.component.html',
  styleUrls: ['./show-all-tweets.component.css']
})
export class ShowAllTweetsComponent implements OnInit {


  tweetlist:any;
  dailog:boolean;
  usersearch:any;
  searchText:any;
  isReadMore = true
  show = false;

  userInfo: UserInfoResponseModel ;
  showText() {
     this.isReadMore = !this.isReadMore
  }

 constructor(private service:TweetService,
   private confirmationDialogService:DialogService,
   public dialog: MatDialog , private ss : SharedService) {
      this.userInfo = ss.sharedCustomer;
  }

 ngOnInit(): void {
   this.showAllUsersTweetList();
   this.service.usersearch = true;
 }


 submitSearchRequest(){
  if(this.searchText==null || this.searchText?.length ==0 )return;

  this.service.getUserTweets(this.searchText,this.userInfo.token).subscribe(
      (data)=>{
          console.log(data);

      },
      (error)=>{
        console.error(error);
      }
  );

 }
 calculateHours(dateSent:Date){
   let currentDate = new Date();
   dateSent = new Date(dateSent);

   var result= Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(),
   currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(),
   dateSent.getDate()) ) /(1000 * 60 * 60 * 24));
   if(result>=30){
     return result
   }
 }

 showAllUsersTweetList(){
   this.service.GetAllUserandTweetList().subscribe(
     data =>{

         this.tweetlist=data;
         console.log(this.tweetlist);
     }
   );
 }

 alertBox(): void {
  let dialogRef = this.dialog.open(DialogComponent, {
    width: '250px',
    data: { }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

  });
}

//  openConfirmationDialog() {
//    this.confirmationDialogService.confirm('Please Login', 'To see the full post')
//    .then((confirmed) => console.log('User Logged In:', confirmed))
//    .catch(() => console.log('canceled'));
//  }

}

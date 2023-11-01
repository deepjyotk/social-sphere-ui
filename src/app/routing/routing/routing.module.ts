import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowAllTweetsComponent } from 'src/app/tweet/show-all-tweets/show-all-tweets.component';
import { RegisterComponent } from 'src/app/user/register/register.component';
import { LoginComponent } from 'src/app/user/login/login.component';
import { AfterLoginComponent } from 'src/app/tweet/after-login/after-login.component';
import { AddNewTweetComponent } from 'src/app/tweet/add-new-tweet/add-new-tweet.component';
import { ViewMyTweetsComponent } from 'src/app/tweet/view-my-tweets/view-my-tweets.component';
import { CommentComponent } from 'src/app/tweet/comment/comment.component';
import { ShowUserTweetsComponent } from 'src/app/tweet/show-user-tweets/show-user-tweets.component';
import { AuthGuardService } from 'src/app/service/auth-guard.service';
import { AddTweetDialogComponent } from 'src/app/site/add-tweet-dialog/add-tweet-dialog.component';
import { ViewMyCommentsComponent } from 'src/app/tweet/view-my-comments/view-my-comments.component';
import { ForgotPasswordComponent } from 'src/app/user/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/user/reset-password/reset-password.component';
import { AddCommentPopupComponent } from 'src/app/tweet/add-comment-popup/add-comment-popup.component';

const routes=[

  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'forgotpassword', component : ForgotPasswordComponent},
  {path:'landingpage', component:ShowAllTweetsComponent},
  {path : 'resetpassword', component : ResetPasswordComponent,canActivate: [AuthGuardService]},
  {path:'afterlogin', component: AfterLoginComponent,canActivate: [AuthGuardService]},
  {path:'addnewtweet',component:AddNewTweetComponent,canActivate: [AuthGuardService]},
  {path:'viewMyTweets',component:ViewMyTweetsComponent,canActivate: [AuthGuardService]},
  {path:'comment/:tweetid', component:CommentComponent,canActivate: [AuthGuardService]},
  {path:'viewothertweets', component:ShowUserTweetsComponent,canActivate: [AuthGuardService]},
  {path:'addComment/:tweetId', component:AddTweetDialogComponent,canActivate: [AuthGuardService]},
  {path:'viewmycomment/:tweetId', component:ViewMyCommentsComponent,canActivate: [AuthGuardService]},
  {path: 'addnewcomment', component: AddCommentPopupComponent, canActivate: [AuthGuardService]}


]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class RoutingModule { }

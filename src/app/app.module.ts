import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { FooterComponent } from './site/footer/footer.component';
import { DialogComponent } from './site/dialog/dialog.component';
import { ShowAllTweetsComponent } from './tweet/show-all-tweets/show-all-tweets.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoutingModule } from './routing/routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShowUserTweetsComponent } from './tweet/show-user-tweets/show-user-tweets.component';
import { AfterLoginComponent } from './tweet/after-login/after-login.component';
import { AddNewTweetComponent } from './tweet/add-new-tweet/add-new-tweet.component';
import { DatePipe } from '@angular/common';
import { ViewMyTweetsComponent } from './tweet/view-my-tweets/view-my-tweets.component';
import { CommentComponent } from './tweet/comment/comment.component';
import { AddTweetDialogComponent } from './site/add-tweet-dialog/add-tweet-dialog.component';
import { ViewMyCommentsComponent } from './tweet/view-my-comments/view-my-comments.component';
import { FilterPipe } from './tweet/filter.pipe';
import { TweetfilterPipe } from './tweet/tweetfilter.pipe';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { AddCommentPopupComponent } from './tweet/add-comment-popup/add-comment-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    DialogComponent,
    ShowAllTweetsComponent,
    ShowUserTweetsComponent,
    AfterLoginComponent,
    AddNewTweetComponent,
    ViewMyTweetsComponent,
    CommentComponent,
    AddTweetDialogComponent,
    ViewMyCommentsComponent,
    FilterPipe,
    TweetfilterPipe,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AddCommentPopupComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

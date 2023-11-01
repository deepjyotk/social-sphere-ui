import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddCommentRequestModel } from '../models/add-comment';
import { AddTweetRequestModel } from '../models/add-tweet.model';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  authurl = 'https://4o0nffxis8.execute-api.us-east-1.amazonaws.com/Prod/api/v1/UserTweet/';
  usersearch:any;

  constructor(private http: HttpClient) { }

  GetAllUserandTweetList()
  {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType':'text' })
    let options = { headers: header }
    console.log("in GetAllUserandTweetList");
    return this.http.get<any>(this.authurl+"GetAllUserandTweetList",options)
  }

  addTweet(tweet:AddTweetRequestModel, authToken: string)
  {
    let body = JSON.stringify(tweet)
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization':`Bearer ${authToken}` })
    let options = { headers: header }
    console.log("in addTweet");
    return this.http.post(this.authurl+"MakeTweet/",body,options)
  }

  addComment(model: AddCommentRequestModel, authToken: string){

    let body = JSON.stringify(model);
    console.log(body);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type' ,'application/json');
    headers = headers.append('Authorization' ,`Bearer ${authToken}`);
    console.log("in addTweetComments");
    return this.http.patch<Service>(this.authurl+"CommentOnTweet/",body,{headers: headers})
  }


  getUserTweets(userId:string, authToken: string){

    let headers = new HttpHeaders();

    headers = headers.append('Content-Type' ,'application/json');
    headers = headers.append('Authorization' ,`Bearer ${authToken}`);
    console.log("in GetAllUserandTweetList");
    let params = new HttpParams();
     params = params.append('userId', `${userId}`);
// this.http.get('url', {headers, params});

    return this.http.get<Service>(this.authurl+"GetTweetBySpecificUser/",{headers: headers, params:params})
  }

  likeTweet(tweetId: string, authToken: string){


    let body = JSON.stringify(tweetId);
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type' ,'application/json');
    headers = headers.append('Authorization' ,`Bearer ${authToken}`);


    let params = new HttpParams();
    params = params.append('tweetId', `${tweetId}`);
    return this.http.patch<Service>(this.authurl+"LikeTweet/", body, {headers: headers});
  }


  getOtherUserTweets(userId:any){
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType':'text' })
    let options = { headers: header }
    console.log("in GetAllUserandTweetList");
    return this.http.get<any>(this.authurl+"ViewOtherUsersAllTweets/"+userId,options)
  }

  getLikes(tweetId:any,userId:any){
    let body=tweetId+"/"+userId
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType':'text' })
    let options = { headers: header }
    console.log("in GetAllUserandTweetList");
    return this.http.get<any>(this.authurl+"TweetLike/"+body,options);
  }

  getComments(tweetId:any){

    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType':'text' })
    let options = { headers: header }
    console.log("in GetAllUserandTweetList");
    return this.http.get<any>(this.authurl+"getTweetComments/"+tweetId,options);
  }


}

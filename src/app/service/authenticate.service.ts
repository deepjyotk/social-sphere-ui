import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoginRequestModel } from '../models/login.model';
import { UserInfoResponseModel } from '../user/register/register';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  authurl = 'https://4o0nffxis8.execute-api.us-east-1.amazonaws.com/Prod/api/v1/UserTweet/';
  loggedInUser:any;
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private http: HttpClient) { }

  authenticate(loginRequest : LoginRequestModel)
  {
    let body = JSON.stringify(loginRequest)
    let header = new HttpHeaders({ 'Content-Type': 'application/json' })
    let options = { headers: header }
    console.log("in login");
    const local_url = this.authurl+"LoginUser/" ;
    var res=  this.http.post<LoginRequestModel>(local_url,body,options);
    if(res != null){
      this.loggedIn.next(true);
    }
    return res;
  }

  register(user:any)
  {
    let body = JSON.stringify(user.value)
    let header = new HttpHeaders({ 'Content-Type': 'application/json' })
    let options = { headers: header }
    console.log("in register");
    const local_url = this.authurl+"RegisterUser/" ;
    var res=  this.http.post<UserInfoResponseModel>(local_url,body,options);

    return res;
  }

  checkEmailId(emailId:string)
  {
    let body = emailId;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType':'text' })
    let options = { headers: header }
    console.log("in checkEmailID");
    // return this.http.post<any>(this.authurl+"UserExists/"+body,options)
  }

  forgotPasswordEmailId(userId:any){
    let body = userId;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType':'text' })
    let options = { headers: header }
    console.log("in register");
    return this.http.get<any>(this.authurl+"ForgotPasswordEmailId/"+body,options)
  }

  forgotPassword(userId:any,password:any){
    let body = userId+"/"+password;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType':'text' })
    let options = { headers: header }
    console.log("in forgotPassword");
    return this.http.put<any>(this.authurl+"ForgotPassword/"+body,options)
  }

  resetPassword(userId:any,oldPassword:any,newPassword:any){
    let body = userId+"/"+oldPassword+"/"+newPassword;
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType':'text' })
    let options = { headers: header }
    console.log("in forgotPassword");
    return this.http.put<any>(this.authurl+"RegisterRequestModel/"+body,options)
  }
  onLogout(){
    this.loggedInUser=null;
  }
}

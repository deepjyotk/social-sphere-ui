import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  authurl = 'http://localhost:50465/'
  constructor(private http: HttpClient) { }

  GetAllUserandTweetList()
  {
    let header = new HttpHeaders({ 'Content-Type': 'application/json', 'responseType':'text' })
    let options = { headers: header }
    console.log("in GetAllUserandTweetList");
    return this.http.get<any>(this.authurl+"GetAllUserandTweetList",options)
  }
}

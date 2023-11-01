import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from 'src/app/service/authenticate.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  userlist:any
  userId:any
  hide = false
  Accountname:any;
  searchText:any;

  constructor(private router:Router, private authService:AuthenticateService, private sharedService:SharedService)
   {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    if(this.isLoggedIn$){
        this.hide=false
    }

    this.Accountname=this.authService.loggedInUser
    console.log(this.Accountname);
  }

  onLogout()
  {
    this.authService.loggedInUser=null;
    this.router.navigateByUrl('/login')
  }

  Login(){
    this.router.navigateByUrl('/login')

  }
  RegisterRequestModel(){
    this.router.navigateByUrl('/register')
  }

  getUser()
  {
    return this.authService.loggedInUser
  }

}

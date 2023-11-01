import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/authenticate.service';
import { SharedService } from 'src/app/service/shared.service';
import { TweetService } from 'src/app/service/tweet.service';
import { UserInfoResponseModel } from '../register/register';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword = false;
  loggedUserDetails:any;
  userId:any;
  userName:any;
  loginForm:FormGroup;
  submitted=false;
  passwordshow:boolean=false;
  passwordType:string="password";
  userList:any;
  tweetlist:any;
  valid:boolean=false;
  passwordNotSame=false;
  password;
  hide = true;
  show=false;


  constructor(private formBuilder: FormBuilder, private router: Router,private service:AuthenticateService,private sharedservice: SharedService) { }


  ngOnInit(): void {
    this.password = 'password';
  }
  form: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  });

  hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  get passwordInput()
  {
    return this.form.get('password');
  }

  get emailInput()
  {
    return this.form.get('username');
  }

  submit() {
    console.log(this.form.value);
    this.form.value.username,this.form.value.password
    this.service.authenticate({
      email : this.form.value.username,
      password :this.form.value.password
    }).subscribe(
      (data : UserInfoResponseModel )=> {
        this.sharedservice.sharedCustomer=data;
        this.userList=data;
        this.service.loggedInUser=this.userList;
        this.loggedUserDetails= data
        console.log(this.loggedUserDetails);
        console.log(data)
        if(data!=null)
        {
          this.valid=false;
          console.log("Login Successful")
          this.router.navigateByUrl("/afterlogin")
        }
        else{

            this.valid=true;

        }
      })

  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();
}

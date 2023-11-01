import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/authenticate.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private authService:AuthenticateService,private router:Router) { }

  valid = true;
  invalidUserId=false;
  passwordUpdate=false;

  ngOnInit(): void {
  }

  emailform: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.email]),
  });

  forgotPasswordform: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.email]),
    newpassword: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
  });

  hasError = (controlName: string, errorName: string) =>{
    return this.forgotPasswordform.controls[controlName].hasError(errorName);
  }

  checkuserId(){
    console.log("in checkUserId");
    this.authService.forgotPasswordEmailId(this.emailform.value.username).subscribe(
      data =>{
        if(data['status'] == "you can change the password")
        {
            this.valid= false;

        }
        else{
          this.invalidUserId=true;
        }
      }
    )
  }

  changePassword(){
    console.log("in change password");
    this.authService.forgotPassword(this.forgotPasswordform.value.username,this.forgotPasswordform.value.newpassword).subscribe(
      data =>{

        if(data['status'] == "password Updated")
        {
            this.router.navigateByUrl('/login');

        }
        else{
          this.passwordUpdate=true;
        }
      }
    )
  }








}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/service/authenticate.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  loggedInUserdetails:any;
  valid=false;
  passwordUpdated=false;
  resetPassword=true;
  hide = true;
  show= true;

  constructor(private authService:AuthenticateService, private router:Router) { }

  ngOnInit(): void {
      this.loggedInUserdetails=this.authService.loggedInUser;
      console.log(this.loggedInUserdetails);
  }

  form: FormGroup = new FormGroup({
    oldpassword: new FormControl('',[Validators.required, Validators.email]),
    newpassword: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]),
  });

  hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }
changePassword(){

   this.authService.resetPassword(this.authService.loggedInUser.emailId,
    this.form.value.oldpassword, this.form.value.newpassword).subscribe(
      data => {
        if(data['status'] == "password Updated"){
          this.passwordUpdated = true;
          this.resetPassword=false;
        }
        else{
          this.valid=true;
        }
      }
    )

}

gotoHome(){
  this.router.navigateByUrl('/afterlogin');
}

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {AuthenticateService} from 'src/app/service/authenticate.service';
// import {default as _rollupMoment} from 'moment';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { RegisterRequestModel } from './register';


// const moment = _rollupMoment || _moment;
const moment = _moment;

// export class CrossFieldErrorMatcher implements ErrorStateMatcher {
//   constructor(private name:string){}  //<--add a constructor
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const invalidCtrl = !!(control && control.invalid && (control.dirty || control.touched));
//     const invalidParent = !!(control && (control.parent.hasError('name')));
//     return ((invalidCtrl || invalidParent));
//   }
// }

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isEmailExist: boolean
  passwordNotSame:boolean
 alreadyexists:boolean=false;
 debouncer: any;
 img:string;
 formValid = false;
 Imgvalid=false;

  constructor(private formBuilder: FormBuilder,private router:Router,private service:AuthenticateService) { }

  form: FormGroup;
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('',[Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl('',[Validators.required]),
      gender: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      emailId: new FormControl('',[Validators.required,]),
      password: new FormControl('',[Validators.required]),
      photoProfile:new FormControl('',[Validators.required] )
    });
    // this.addValidator();
  }

  genders = [
    {id:'male',gender:'Male'},
    {id:'female' ,gender:'Female'},
    {id:'others',gender:'others'}
  ];

  selectedValue:string

    checkUsername(emailId: string){}
//   checkUsername(emailId:string):any {

//       this.service.checkEmailId(emailId).subscribe(
//         data =>
//         {
//           console.log(data);

//             if(data==emailId){
//               this.isEmailExist=true;

//             }
//             else{
//               this.isEmailExist=false
//             }
//             console.log(this.isEmailExist);
//         }
//       )

//   ;
// }
   register=new RegisterRequestModel();

   fileEvent(event :any){
    this.img= event.target.files[0].name;
  }



  hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onConfirmPassword(event:any){
    if(event.target.value != this.form.value['password'])
    {
      console.log(event.target.value );
      console.log(this.form.value['password']);
      this.passwordNotSame = true;
    }
    else
    {
      this.passwordNotSame = false;
    }
    console.log(this.passwordNotSame);
  }

  onPassword(event:any,password:string){
    this.passwordNotSame = true;
    if(event.target.value != password)
    {
      this.passwordNotSame = true;
    }
    else
    {
      this.passwordNotSame = false;
    }
  }

  // Firstname: new FormControl('',[Validators.required, Validators.maxLength(20)]),
  //     lastName: new FormControl('',[Validators.required]),
  //     gender: new FormControl('',[Validators.required]),
  //     Dob: new FormControl('',[Validators.required]),
  //     emailId: new FormControl('',[Validators.required,]),
  //     password: new FormControl('',[Validators.required]),
  //     Imgname:new FormControl('',[Validators.required] )

  onSubmit()
  {

    if(this.form.value.Firstname==null && this.form.value.gender==null&&
      this.form.value.dob==null && this.form.value.emailId==null &&
      this.form.value.password == null  )
      {
         this.formValid=true

      }
    else{
      this.form.value.dob=moment().format('YYYY-MM-DD');
      console.log(this.form.value);
      console.log(this.img);
      if(this.img == null){
        this.form.value.photoProfile ="TU.jpg"
      }
      this.form.value.photoProfile= this.img;
      console.log(this.img);
      this.service.register(this.form).subscribe(
        data => {
          console.log(data);
          if(data.userId!=null)
          {
            console.log("registered successfully");
            this.router.navigateByUrl("/login")
          }
          else if(data['status'] == "You have the account already please login")
          {
              //
          }

        },

        error => {

          console.error(error);
        }
      )
    }
  }
}

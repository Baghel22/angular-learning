import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentServiceService } from 'src/app/component-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginDetails:any
  constructor(private router: Router,private service:ComponentServiceService ){

  }
  signUpForm:any =FormGroup
  ngOnInit(): void{
    this.getFormsDetails()
    console.log((localStorage.getItem('userDetails')))
    let localStorageValue:any = localStorage.getItem('userDetails')
    // let newDetails = JSON.parse(localStorageValue)
    this.loginDetails = JSON.parse(localStorageValue) 
    console.log(this.loginDetails.emailField);
    
  }
  checkFirstLetter(value:any){
console.log(value);
let name = value
let names = name.length
let firstChar = name.charAt(0)
let lastChar = name.charAt(name.length-1)
console.log(names)
return firstChar
  }
  getFormsDetails(){
    this.signUpForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(8),Validators.pattern('[a-zA-Z][a-zA-Z ]+')])
    })
  }
  signupDetails(){
  let data:any = {
     emailField : this.signUpForm.value.email.toLoerCase(),
     passwordField : this.signUpForm.value.password
  }
  console.log(data)
  // if(this.signUpForm.value.email == this.loginDetails.emailField){
    // this.router.navigate(['/signup'])
    this.service.successToast('Login Success')
    this.service.errorToast('Login unsuccess')
    this.service.warningToast('Fill all fileds')

    this.router.navigate(['/homepage'])
    this.getBookDetails()
  // }else{
    // this.toaster.error('Your email id not match with this data')
  // }

  }
  getBookDetails(){
    let url:any ='newData'
    this.service.getApi(url).subscribe((res:any)=>{

    },(err:any)=>{

    })
  }
}

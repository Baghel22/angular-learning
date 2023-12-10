import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentServiceService } from 'src/app/component-service.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
constructor(private router:Router,private activatedRoute:ActivatedRoute,private service :ComponentServiceService,private http:HttpClient){

}
signUpForm:any =FormGroup
ngOnInit(): void{
  this.getFormsDetails()
}
getFormsDetails(){
  this.signUpForm = new FormGroup({
    name : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    email: new FormControl('',[Validators.required]),
    mobile : new FormControl('',Validators.required),
    password : new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(8),Validators.pattern('[a-zA-Z][a-zA-Z ]+')])
  })
}
signupDetails(){
this.service.showSpinner()
  let data:any = {
   nameField : this.signUpForm.value.name,
   emailField : this.signUpForm.value.email,
   mobileFiled : this.signUpForm.value.mobile,
   passwordField : this.signUpForm.value.password
}
console.log(data)
localStorage.setItem('userDetails',JSON.stringify(data))
let url ='http://localhost:4200/senduserDetails'
this.http.post(url,data).subscribe((res)=>{
  console.log(res);
  
})
if(this.signUpForm.value.name){
  this.router.navigate(['/login'])
  this.service.successToast('User Registration completed')
  setTimeout(() => {
    this.service.hideSpinner()
  }, 2000);
}else{
  this.service.successToast('User Details Not Found')
}
}
}

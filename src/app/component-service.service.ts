import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {
  baseUrl:any = 'www.myproject.com'
  constructor(private toaster:ToastrService,private spinner:NgxSpinnerService,private http:HttpClient) {

   }
   successToast(message:any){
    this.toaster.success(message)
   }
   errorToast(message:any){
    this.toaster.error(message)
   }
   warningToast(message:any){
    this.toaster.warning(message)
   }
   showSpinner(){
    this.spinner.show()
   }
   hideSpinner(){
    this.spinner.hide()
   }
   getApi(url:any){
    if(localStorage.getItem('token')){
let token = localStorage.getItem('token')
     
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Bearer " + token);

    const httpOptions = {
      headers: headers_object
    };
    }else{
      var headers_object = new HttpHeaders();
      headers_object.append('Content-Type', 'application/json');
      headers_object.append("Authorization", "");
  
      const httpOptions = {
        headers: headers_object
      };
    }
    return (this.http.get(this.baseUrl + url))
   }
   postApi(url:any,data:any){
    if(localStorage.getItem('token')){
      let token = localStorage.getItem('token')
           
          var headers_object = new HttpHeaders();
          headers_object.append('Content-Type', 'application/json');
          headers_object.append("Authorization", "Bearer " + token);
              const httpOptions = {
            headers: headers_object
          };
          }else{
            var headers_object = new HttpHeaders();
            headers_object.append('Content-Type', 'application/json');
            headers_object.append("Authorization", "");
        
            const httpOptions = {
              headers: headers_object
            };
          }
          return (this.http.post(this.baseUrl + url,data))
   }

}

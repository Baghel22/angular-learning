import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TestingComponent } from 'src/app/components/testing/testing.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  getValue:any
  isPreview:boolean = false;
  @ViewChild('pRef', {static: false}) pRef:any= ElementRef;

  constructor(private router:Router,private http:HttpClient){

  }
    ngAfterViewInit() {
    console.log(this.pRef); 
    this.pRef.nativeElement.innerHTML = 'new'; 
  }
 // array of countries 
  firstArray = [{name:'India',code:'IN'},
{name:'United State of America',code:'US'},
{name:'Africa',code:'AF'}]
// array of states
stateArray = [{name:'Delhi',code:'IN',stateCode:'DL'},
{name:'uttar Pradesh',code:'IN',stateCode:'UP'},
{name:'Fort Collins',code:'US',stateCode:'FC'},
{name:'Africa Home',code:'AF',stateCode:'AH'}]
// array of city 
cityArray = [
  {name:'new Delhi',code:'DL'},
  {name:'Ghaziabad',code:'UP'},
  {name:'South Delhi',code:'DL'},
  {name :'Noida',code:'UP'}
]
  ngOnInit(): void{
    this.getCountryList()
  }
  myArrayFiltered:any = []
  // get country code 
  getApiValue(value:any){
    console.log(value.target.value);
    let countryCode = value.target.value
//  filter used for get state array from country code
 this.myArrayFiltered = this.stateArray.filter((variable) => {
    return countryCode === variable.code;
  });
  console.log(this.myArrayFiltered);
  // `${fa}' ' + '' + dauyy + ${rf}`
  }


  myArrayFilteredcity:any=[]// filter used to get city from states 
  getSDtateValue(value:any){
    console.log(value.target.value)
    let stateCode = value.target.value
     
 this.myArrayFilteredcity = this.cityArray.filter((variable) => {
  return stateCode === variable.code;
});
  }
// contactUsForm :any = FormGroup

// getting the data from API
entriesData:any = []
getCountryList(){
  let url ='https://api.publicapis.org/entries'
  this.http.get(url).subscribe((res:any)=>{
    if(res){
      this.entriesData = res.entries
    }else{
      
    }
  })
}
chnageValue(){
  setTimeout(() => {
  this.isPreview = true;
    
  }, 2000);
}

heckdays(){
  const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element:any) => element > 13;
console.log(array1.findIndex(isLargeNumber));    
}

}

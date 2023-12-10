import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  getValue:any
  @Input() name: any = 'hello';

  constructor(private router:Router,private http:HttpClient){

  }

  //  this testing component is parent component 
  //  data to show in banner component 
  
  formatedData:any = [{userType:'Customer_Data',work:'Selling_Products'},
  {userType:'Customer_Data1',work:'Selling_Products1'},
  {userType:'Customer_Data2',work:'Selling_Products2'},
  {userType:'Customer_Data3',work:'Selling_Products3'}
]

ngOnInit(): void{
this.getCountryList()
}
  change(value:any){
this.getValue = value
  }

  // sending data through queryParam from 'testing' component to 'routing' component 
  sendDataINquery(){
this.router.navigate(['/routing'],{queryParams:{key:'Data Transfer',title:'Hello'}})
  }

 // Modifying the data 
  changeValue(value:any){
let modifyValue = value.replace('_',' ')
return modifyValue
  }
 
  // getting data of country
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
}

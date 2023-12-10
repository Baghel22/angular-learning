import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  name:any
  email:any
  checkUi :boolean = false;
   newArry = [
    {name:'abc',dateofbirth:'10-02-23'},
    {name:'def',dateofbirth:'15-02-23'},
    {name:'ghi',dateofbirth:'12-08-23'},
    {name:'jkl',dateofbirth:'10-06-23'},
    {name:'mno',dateofbirth:'10-05-23'},
  ]
  constructor(){
    this.name =  localStorage.getItem('name')
    this.email = sessionStorage.getItem('email')
  }
  
  ngOnInit(): void{
    
  }
  chnageValue(){
    this.checkUi = true;
    setTimeout(() => {
    this.checkUi = false;
    }, 3000);
  }
}

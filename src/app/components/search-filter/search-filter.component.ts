import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
name : any= 'Serach And Filter'
  searchText: any;
  
  fromDate: any;
  p: number = 1;
  constructor(private http:HttpClient){}
  collection: any =[] ;  
itemPerPage : any = 10
pageSize: any = 1
totalItems:any
  characters = [
    'Ironman',
    'Spiderman',
    'Thor',
    'Captain America',
    'Black widow',
    'Hulk',
    'Hawkeye',
    'Falcon',
    'Captain Marvel'
  ];


  changePage(event:any){
    this.pageSize= event
  }
  serachWithPostApi(){
    let url =`ww.htoddgjf.com`
    let data = {
      // search : this.myForm.value.keyname
      // fromDate:  this.myform.vlaue.ketname  
      /***
       * @param or  */
      serach: this.searchText
    }
    console.log(data)
    this.http.post(url,data).subscribe((res)=>{


    })
  }

  serachWithGetApiDataPassInQueryParams(){
    let url  = `https://bookstore.toolsqa.com/BookStore/v1?page=1&limit=10&search=${this.searchText}&fromDate=${this.fromDate}&toDate=${this.searchText}`
console.log(url);

    this.http.get(url).subscribe((res)=>{

    })
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing-componet',
  templateUrl: './routing-componet.component.html',
  styleUrls: ['./routing-componet.component.scss']
})
export class RoutingComponetComponent {
  nametest:any = "testing"
  rowData :any= [{name:'one',age:'22'},
{name:'two',age:'43'}]
childValue:any
queryParamsData:any
  constructor(private router : Router,private activatedRoute:ActivatedRoute){
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(res)
      this.queryParamsData = res
      console.log(this.queryParamsData.key)
    })
  }
  back(value:any){
    console.log(value)
    this.router.navigate(['/testing'])
  }
  oncheckValue(value:any){
    this.childValue = value
  }
}

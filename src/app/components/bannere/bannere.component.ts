import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bannere',
  templateUrl: './bannere.component.html',
  styleUrls: ['./bannere.component.scss']
})
export class BannereComponent { // this is child component 
@Input() namehs:any  = ''


 // output method from child to parent 
@Output() emitValue = new EventEmitter<any>(); 
newData:any = 'data is here'
price :any = 100000000000;

dateFortmat:any = '2023-07-29T08:15:08.683Z'
constructor(){
  console.log(this.namehs);
}
changeValue(){
  this.emitValue.emit(this.newData)
}

}

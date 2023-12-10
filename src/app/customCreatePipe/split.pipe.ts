import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {


  // modifying the data 
  transform(value: unknown, ...args: unknown[]): unknown {
    if(value == 'Customer_Data'){
      return 'subday'
    }
    if(value == 'Customer_Data1'){
      return 'Customer Data1'
    }
    if(value == 'Customer_Data2'){
      return 'Customer Data2'
    }
    if(value == 'Customer_Data3'){
      return 'Customer Data3'
    }
    return null;
  }

}

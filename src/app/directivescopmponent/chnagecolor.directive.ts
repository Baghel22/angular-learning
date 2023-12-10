import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChnagecolor]'
})
export class ChnagecolorDirective {
    colors = ['red', 'blue', 'green', 'yellow'];

    constructor(el: ElementRef) {  // changing the color through directive
      this.changeColor(el); //   ElementRef is a DOM element and by this we can change in our application 
   }
  
   changeColor(el: ElementRef) {
    // *************** setting the interval for color changes *************
    //  setInterval(() => {
    //   el.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    //  }, 1000); 

     // here this method continuously changes the color in 1 sec interval 

    // ********setting time for change in the color***************************************

    setTimeout(() => { // this method run in given time and then stop 
      el.nativeElement.style.color = 'red';
     }, 6000); // here this method  run for 6 sec and change the color to  red 
  }
}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[redColor]'
})
export class RedColorDirective {

  constructor(element : ElementRef) 
  {
      element.nativeElement.style.color="red";
  }

}

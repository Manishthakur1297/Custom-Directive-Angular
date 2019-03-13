import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[redColor]'
})
export class RedColorDirective {

  i=1;
  constructor(element : ElementRef) 
  {
      element.nativeElement.style.color="red";
  }

  @HostListener('click')
  abc()
  {
    console.log("Clicked......"+this.i++)
  }

  @HostListener('mouseenter')
  xyz()
  {
    console.log("Entered......"+this.i++)
  }

  @HostListener('mouseleave')
  atoz()
  {
    console.log("Leaving......"+this.i++)
  }

  @HostListener('mousemove')
  xqw()
  {
    console.log("Moving......"+this.i++)
  }

}

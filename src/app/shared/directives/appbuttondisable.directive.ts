import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAppbuttondisable]'
})
export class AppbuttondisableDirective {
  @Input() appAppbuttondisable:boolean=false;

  constructor(private el:ElementRef) { }

 ngOnChanges() { 
  this.el.nativeElement.disabled = this.appAppbuttondisable; 
}

}

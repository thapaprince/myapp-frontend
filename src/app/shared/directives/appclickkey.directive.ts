import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppclickkey]'
})
export class AppclickkeyDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  onClick() {
    this.el.nativeElement.style.backgroundColor = "green"
  }

   @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);

    if (event.key === 'Enter') {
      this.el.nativeElement.style.backgroundColor = 'lightblue';
    }
  }

}

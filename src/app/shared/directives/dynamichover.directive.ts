import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDynamichover]'
})
export class DynamichoverDirective {
  @Input() appDynamichover: string = "";
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appDynamichover);
  }

  // @HostListener('mouseenter')
  // onMouseEnter(){
  //   this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appDynamichover);
  // }

}

import { Directive, ElementRef,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppif]'
})
export class AppifDirective {

  constructor(private templateRef:TemplateRef<any>, private viewContainerRef:ViewContainerRef) { }

   @Input() set appAppif(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}

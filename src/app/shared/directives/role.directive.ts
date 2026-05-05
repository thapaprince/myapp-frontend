import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  @Input() appRole!: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    const userRole = 'admin'; // from auth service

    if (userRole === this.appRole) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } 
    else {
      this.viewContainer.clear();
    }
  }
}

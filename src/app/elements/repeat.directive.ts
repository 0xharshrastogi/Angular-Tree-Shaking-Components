import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective {
  @Input('appRepeat') set count(value: number) {
    this.viewContainerRef.clear();

    for (let i = 0; i < value; i++)
      this.viewContainerRef.createEmbeddedView(this.templateRef, { index: i });
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
}

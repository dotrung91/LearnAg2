import { Directive, Input, HostListener, HostBinding, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCollapseExpanse]'
})
export class CollapseExpanseDirective {
  @Input('appCollapseExpanse') appCollapseExpanse;
  constructor( private el: ElementRef, private renderer: Renderer ) { }

  private showtab(hidden) {
    if (hidden === true) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
    }
  }

  @HostListener('click') onClick() {
    this.showtab('this.appCollapseExpanse');
  }
}

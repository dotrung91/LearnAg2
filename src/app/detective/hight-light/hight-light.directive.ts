import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {
  @Input('appHightLight') appHightLight: String;

  constructor( private el: ElementRef, private renderer: Renderer) {
  }

  private hightLight(color) {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', color);
    this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'pointer');
  }
  @HostListener('click') onclick() {
    this.hightLight(this.appHightLight);
  }
  @HostListener('mouseenter') onmouseover() {
    this.hightLight(this.appHightLight);
  }
  @HostListener('mouseleave') onmouseleave() {
    this.hightLight('');
  }
}

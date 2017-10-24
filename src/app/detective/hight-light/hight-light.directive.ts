import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {
 constructor( private el: ElementRef, private renderer: Renderer) {
    this.hightLight('blue');
  }

  private hightLight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', color);
    this.renderer.setElementStyle(this.el.nativeElement, 'cursor', 'pointer');
  }
}

import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appHoverClass]',
    standalone: false
})
export class HoverClassDirective {
  constructor(public el: ElementRef) {}
  @Input('appHoverClass') hoverClass: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove(this.hoverClass);
  }
}

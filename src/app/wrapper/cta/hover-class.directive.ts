import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverClass]',
})
export class HoverClassDirective {
  constructor(public el: ElementRef) {}
  @Input('appHoverClass') hoverClass: string;

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.hoverClass);
    this.el.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove(this.hoverClass);
  }
}

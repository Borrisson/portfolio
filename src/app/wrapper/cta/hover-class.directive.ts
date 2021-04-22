import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverClass]',
})
export class HoverClassDirective {
  constructor(public el: ElementRef) {}
  @Input('appHoverClass') hoverClass: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.add('colored');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove('colored');
  }
}

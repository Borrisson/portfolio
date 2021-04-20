import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverClass]',
})
export class HoverClassDirective {
  constructor(public el: ElementRef) {}
  @Input('appHoverClass') hoverClass: string;

  @HostListener('mouseenter') onMouseEnter() {
    const elClass = this.el.nativeElement.className.match(/devicon-(\w+)-\w+/);
    this.el.nativeElement.classList.remove(elClass[0]);
    this.el.nativeElement.classList.add(
      `${elClass[0]}${
        elClass[1] === 'sass' || elClass[1] === 'javascript' ? '' : '-wordmark'
      }`
    );
    this.el.nativeElement.classList.add('colored');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove('colored');
    const elClass = this.el.nativeElement.className.match(
      /(devicon-\w+-\w+)(-wordmark)?/
    );
    this.el.nativeElement.classList.remove(elClass[0]);
    this.el.nativeElement.classList.add(elClass[1]);
  }
}

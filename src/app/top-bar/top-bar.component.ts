import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('header', { static: true }) header: ElementRef;
  @ViewChild('title', { static: true }) title: ElementRef;

  positions = ['Developer', 'Pilot', 'Photographer'];
  currentPosition = 0;

  ngAfterViewInit() {
    this.header.nativeElement.classList.add('is-loading');
    setTimeout(() => {
      this.header.nativeElement.classList.remove('is-loading');
    }, 100);

    setInterval(() => {
      this.currentPosition = ++this.currentPosition % 3;
      const active = this.positions[this.currentPosition].split('');

      const charArrayInterval = setInterval(() => {
        if (!active[0]) {
          clearInterval(charArrayInterval);
        } else {
          this.title.nativeElement.textContent += active.shift();
        }
      }, 100);

      this.title.nativeElement.textContent = '';
    }, Math.max(...this.positions.map((el) => el.length * 3 * 100)));
  }
}

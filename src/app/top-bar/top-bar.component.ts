import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements AfterViewInit {
  constructor() {}

  @ViewChild('header', { static: true }) header: ElementRef;

  ngAfterViewInit() {
    this.header.nativeElement.classList.add('is-loading');
    setTimeout(() => {
      this.header.nativeElement.classList.remove('is-loading');
    }, 100);
  }
}

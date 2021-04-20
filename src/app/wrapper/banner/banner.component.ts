import { Component } from '@angular/core';
import { faGem } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  faGem = faGem;
  constructor() {}
}

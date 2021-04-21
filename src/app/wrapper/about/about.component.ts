import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  faUser = faUser;
  constructor() {}
}

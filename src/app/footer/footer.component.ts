import { Component } from '@angular/core';
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  constructor() {}
}

import { Component } from '@angular/core';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faIdCard = faIdCard;
  constructor() {}
}

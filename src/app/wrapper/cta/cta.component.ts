import { Component } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  languageIcons: string[];
  frameworkIcons: string[];
  faCheckCircle = faCheckCircle;
  constructor() {
    this.languageIcons = [
      'devicon-javascript-plain',
      'devicon-typescript-plain',
      'devicon-css3-plain',
      'devicon-html5-plain',
      'devicon-ruby-plain',
      'devicon-sass-original',
      'devicon-postgresql-plain',
    ];
    this.frameworkIcons = [
      'devicon-nodejs-plain',
      'devicon-jquery-plain ',
      'devicon-angularjs-plain',
      'devicon-react-original',
      'devicon-rails-plain',
      'devicon-redis-plain',
      'devicon-bootstrap-plain',
    ];
  }
}

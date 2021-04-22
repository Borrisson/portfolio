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
      'javascript-plain',
      'typescript-plain',
      'css3-plain',
      'html5-plain',
      'ruby-plain',
      'sass-original',
      'postgresql-plain',
    ];
    this.frameworkIcons = [
      'nodejs-plain',
      'jquery-plain ',
      'angularjs-plain',
      'react-original',
      'rails-plain',
      'redis-plain',
      'bootstrap-plain',
    ];
  }
}

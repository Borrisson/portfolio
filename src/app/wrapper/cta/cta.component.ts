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
  databaseIcons: string[];
  faCheckCircle = faCheckCircle;
  constructor() {
    this.languageIcons = [
      'javascript-plain',
      'typescript-plain',
      'css3-plain',
      'html5-plain',
      'ruby-plain',
      'sass-original',
    ];
    this.frameworkIcons = [
      'nodejs-plain',
      'jquery-plain ',
      'angularjs-plain',
      'react-original',
      'rails-plain',
      'redis-plain',
      'bootstrap-plain',
      'express-original',
      'nextjs-plain',
      'redux-original'
    ];
    this.databaseIcons = ['mongodb-plain', 'postgresql-plain'];
  }
  filterNameOnly(classname: string): string {
    return (
      classname.charAt(0).toUpperCase() +
      classname.match(/(\w+)-(plain|original)?/)[1].slice(1)
    );
  }
}

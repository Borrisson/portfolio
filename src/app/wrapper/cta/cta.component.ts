import { Component } from '@angular/core';

@Component({
    selector: 'app-cta',
    templateUrl: './cta.component.html',
    styleUrls: ['./cta.component.scss'],
    standalone: false
})
export class CtaComponent {
  languageIcons: string[];
  frameworkIcons: string[];
  databaseIcons: string[];
  constructor() {
    this.languageIcons = [
      'javascript-plain',
      'typescript-plain',
      'css3-plain',
      'html5-plain',
      'ruby-plain',
      'sass-original',
      'groovy-plain',
    ];
    this.frameworkIcons = [
      'nodejs-plain',
      'jquery-plain ',
      'angularjs-plain',
      'react-original',
      'rails-plain',
      'redis-plain',
      'bootstrap-plain',
      'materialui-plain',
      'express-original',
      'grails-plain',
      'nextjs-plain',
      'redux-original',
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

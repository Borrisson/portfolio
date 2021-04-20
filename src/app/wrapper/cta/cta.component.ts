import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent {
  languageIcons: string[];
  frameworkIcons: string[];
  mouseOvered = {};

  constructor() {
    this.languageIcons = [
      'devicon-javascript-plain',
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

  testForWordmark(classString: string): boolean {
    if (/sass/.test(classString) || /javascript/.test(classString)) {
      return false;
    } else {
      return true;
    }
  }

  removeWhiteSpace(concatenatedClassString: string): string {
    return concatenatedClassString.replace(/\s+/g, '');
  }
}

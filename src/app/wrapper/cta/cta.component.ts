import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CtaComponent implements OnInit {
  languageIcons: string[];
  frameworkIcons: string[];
  mouseOvered = {};

  constructor() {}

  ngOnInit(): void {
    this.languageIcons = [
      'devicon-javascript-plain',
      'devicon-css3-plain-wordmark',
      'devicon-html5-plain-wordmark',
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
  standalone: false,
})
export class CtaComponent {
  private languageIcons = [
    'javascript-plain',
    'typescript-plain',
    'css3-plain',
    'html5-plain',
    'ruby-plain',
    'sass-original',
    'groovy-plain',
    'kotlin-plain',
    'java-plain',
    'csharp-plain',
  ];
  private frameworkIcons = [
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
    'dotnetcore-plain',
    'ktor-plain',
  ];
  private databaseIcons = ['mongodb-plain', 'postgresql-plain'];

  private cloudProviderIcons = ['amazonwebservices-plain', 'googlecloud-plain'];

  skills = [
    {
      name: 'Languages',
      icons: this.languageIcons,
    },
    {
      name: 'Frameworks',
      icons: this.frameworkIcons,
    },
    {
      name: 'Databases',
      icons: this.databaseIcons,
    },
    {
      name: 'Cloud Providers',
      icons: this.cloudProviderIcons,
    },
  ];

  filterNameOnly(classname: string): string {
    return (
      classname.charAt(0).toUpperCase() +
      classname.match(/(\w+)-(plain|original)?/)[1].slice(1)
    );
  }
}

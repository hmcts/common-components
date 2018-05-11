import { Component } from '@angular/core';
declare function require(name: string);
const divorceMockCase = require('../../../../mock-divorce-case.json');
const sscsMockCase = require('../../../../mock-sscs-case.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data;

  constructor() {
        this.data = sscsMockCase;
  }
}

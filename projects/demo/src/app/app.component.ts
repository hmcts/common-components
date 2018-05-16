import {Component, OnInit} from '@angular/core';
declare function require(name: string);
const divorceMockCase = require('../../../../mock-divorce-case.json');
const sscsMockCase = require('../../../../mock-sscs-case.json');
const dmMockData = require('../../../../mock-dm-created.json');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    data;
    dmData;

    constructor() {
    }

    ngOnInit() {
        this.data = sscsMockCase;
        this.dmData = dmMockData;
  }
}

import { Component, OnInit } from '@angular/core';
declare function require(name: string);
const mockData = require('./mock.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit() {
        return new Promise((resolve) => {
           setTimeout(() => {
                resolve(mockData);
           });
        });
  }
}

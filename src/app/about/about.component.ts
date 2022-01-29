import { Component, OnInit } from '@angular/core';
//import { AnyTxtRecord } from 'dns';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
// https://www.freakyjolly.com/angular-ngx-datatable-tutorial/
export class AboutComponent implements OnInit {
  rows = [];
  constructor() { }

  ngOnInit(): void {

    this.fetch(data => {
      this.rows = data;
    });
  }
  fetch(cb: { (data: any): void; (arg0: any): void; }): void {
    const req = new XMLHttpRequest();
    req.open('GET', `http://swimlane.github.io/ngx-datatable/assets/data/company.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }

}

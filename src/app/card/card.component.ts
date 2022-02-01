import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
export interface Cliente {
  name: string;
  precio: number;
  
}
const Client_DATA: Cliente[] = [
  { name: 'Berta', precio: 1.0079},
  { name: 'Omar',precio: 4.0026}
  
];


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'precio'];
  dataSource = Client_DATA;
  myControl = new FormControl();
  myTable = new FormControl();
  options: string[] = ['Berta', 'Omar', 'Ulises'];
  constructor() { }
  // https://www.quackit.com/css/flexbox/tutorial/nested_flex_containers.cfm
// https://zoaibkhan.com/blog/create-a-responsive-card-grid-in-angular-using-flex-layout-part-1/
// https://edupala.com/how-to-implement-angular-flex-layout/
// https://github.com/angular/flex-layout/wiki/fxFlex-API
  ngOnInit(): void {
  }

}

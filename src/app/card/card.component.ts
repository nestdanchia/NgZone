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

  ngOnInit(): void {
  }

}

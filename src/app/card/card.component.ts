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
// https://livebook.manning.com/book/angular-development-with-typescript-second-edition/chapter-7/43
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
/*
Así pues, indicando layout=”row”, le indicamos que ese div 
es contendor padre, y que la dirección del eje del layout es “row” 
(los elementos hijos se apilan en fila de izquierda a derecha).
Si indicamos que la dirección del layout es “column”, 
los hijos se apilan en columna de arriba a abajo. 
El eje vertical es ahora el eje de la dirección del layout,
 y el eje horizontal es el perpendicular a la dirección del layout.
*/
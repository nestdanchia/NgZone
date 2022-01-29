import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    MatTableModule ,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    CommonModule,

  ],
  exports: [
    MatTableModule ,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    
  ]
})
export class MaterialModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents(null)
  ]
})
export class GridModule { }

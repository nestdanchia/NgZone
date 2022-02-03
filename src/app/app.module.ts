import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
//  https://blog.ag-grid.com/get-started-with-angular-grid-in-5-minutes/
// npm install --save ag-grid-community ag-grid-angular
// 
// 
// https://www.adictosaltrabajo.com/2018/02/14/maquetacion-con-flexbox/
// Cómo usar Flexbox en Angular Material
// <<div class="container" fxLayout="column" fxLayoutAlign="start"
// ng g m about --route=about -m app-routing.module.ts
// https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
// https://codingpotions.com/angular-material
// https://ramya-bala221190.medium.com/simple-example-to-demonstrate-server-sent-events-in-angular-and-node-ea9979b6e19
// https://www.digitalocean.com/community/tutorials/nodejs-server-sent-events-build-realtime-app
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   //  FormsModule,
     MatTableModule ,
     MatCardModule,
     MatIconModule,
     MatInputModule,
     MatDialogModule,
     ReactiveFormsModule,
    BrowserAnimationsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

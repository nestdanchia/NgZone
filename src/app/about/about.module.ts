import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { LinksComponent } from './about/links/links.component';
import { InfoComponent } from './about/info/info.component';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  declarations: [
    AboutComponent,
    LinksComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
   // FormsModule,
    //MatFormFieldModule,
 
    MatIconModule,
    NgxDatatableModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }

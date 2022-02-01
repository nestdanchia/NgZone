import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import { CardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    CardRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatRadioModule,
      MatButtonModule,
      MatTableModule,
   MatAutocompleteModule,
      ReactiveFormsModule
    
  ]
})
export class CardModule { }

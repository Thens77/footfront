import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreneauComponent } from './list/creneau.component';
import { CreneauDeleteComponent } from './delete/creneau-delete.component';
import { CreneauDetailComponent } from './detail/creneau-detail.component';
import { CreneauUpdateComponent } from './update/creneau-update.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreneauComponent,
    CreneauDeleteComponent,
    CreneauDetailComponent,
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class CreneauModule { }

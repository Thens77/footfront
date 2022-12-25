import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ProprietaireRoutingModule } from './route/proprietaire-routing.module';
import { ProprietaireDeleteComponent } from './delete/proprietaire-delete.component';
import { ProprietaireDetailComponent } from './detail/proprietaire-detail.component';
import { ProprietaireComponent } from './list/proprietaire.component';
import { ProprietaireUpdateComponent } from './update/proprietaire-update.component';



@NgModule({
  declarations: [
    UpdateComponent,
    DeleteComponent,
    ListComponent,
    DetailComponent,
    ProprietaireDeleteComponent,
    ProprietaireDetailComponent,
    ProprietaireComponent,
    ProprietaireUpdateComponent
  ],
  imports: [
    CommonModule,
    ProprietaireRoutingModule
  ]
})
export class ProprietaireModule { }

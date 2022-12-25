import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentaireRoutingModule } from './route/commentaire-routing.module';
import { CommentaireDeleteComponent } from './delete/commentaire-delete.component';
import { CommentaireDetailComponent } from './detail/commentaire-detail.component';
import { CommentaireComponent } from './list/commentaire.component';
import { CommentaireUpdateComponent } from './update/commentaire-update.component';



@NgModule({
  declarations: [
    CommentaireDeleteComponent,
    CommentaireDetailComponent,
    CommentaireComponent,
    CommentaireUpdateComponent
  ],
  imports: [
    CommonModule,
    CommentaireRoutingModule
  ]
})
export class CommentaireModule { }

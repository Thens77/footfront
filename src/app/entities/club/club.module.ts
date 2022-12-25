import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubDeleteComponent } from './delete/club-delete.component';
import { ClubDetailComponent } from './detail/club-detail.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ClubUpdateComponent } from './update/club-update.component'; 
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ 
    ClubDeleteComponent,
    ClubDetailComponent,
  ],
  imports: [
    RouterModule,
    CommonModule ,
    GoogleMapsModule],
})
export class ClubModule {}

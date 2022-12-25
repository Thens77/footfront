import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './list/client.component'; 
import { ClientRoutingModule } from './route/client-routing.module';
import { ClientDetailComponent } from './detail/client-detail.component';
import { ClientDeleteComponent } from './delete/client-delete.component';
import { ClientUpdateComponent } from './update/client-update.component';



@NgModule({
  declarations: [
    ClientComponent,
    ClientDeleteComponent,
    ClientDetailComponent,
    ClientUpdateComponent,
  ],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}

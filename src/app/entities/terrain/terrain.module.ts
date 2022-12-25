import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TerrainRoutingModule } from './route/terrain-routing.module';  
import { TerrainDetailComponent } from './detail/terrain-detail.component';
import { TerrainComponent } from './list/terrain.component';
import { TerrainUpdateComponent } from './update/terrain-update.component';
import { TerrainDeleteComponent } from './delete/terrain-delete.component';



@NgModule({
  declarations: [
    TerrainDeleteComponent, 
    TerrainDetailComponent,
    TerrainComponent,
    TerrainUpdateComponent,
  ],
  imports: [CommonModule, TerrainRoutingModule],
})
export class TerrainModule {}

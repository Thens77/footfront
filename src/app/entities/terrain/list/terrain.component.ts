import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TerrainService } from '../service/terrain.service';
import { Terrain } from '../terrain.model';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
  terrains : Terrain[] | undefined;
  @Input() 
  idc? : number | undefined ;
  id : number | undefined ;
  retrievedImage : any ;
  constructor(protected activatedRoute:ActivatedRoute , private terrainService : TerrainService ,private router : Router) { }

  ngOnInit(): void {
    this.get();
  }

  private get() : void {
   
    this.id =this.activatedRoute.parent?.snapshot.params["id"];
    this.terrainService.list(this.id!).subscribe(data=> {
      this.terrains = data ;
      this.terrains.forEach(element => {
        this.retrievedImage = 'data:image/jpeg;base64,' +element.picByte;
        element.picByte = this.retrievedImage; 
      });
      
      console.log(this.terrains)
    })
  }

}

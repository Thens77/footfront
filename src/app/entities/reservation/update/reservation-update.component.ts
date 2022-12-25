 import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreneau } from '../../creneau/creneau.model';
import { CreneauService } from '../../creneau/service/creneau.service';
import { TerrainService } from '../../terrain/service/terrain.service';
import { ITerrain } from '../../terrain/terrain.model';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css'],
})
export class ReservationUpdateComponent implements OnInit {
  public selectedValue: string = '';
  public dateres: Date | any;
  public availablecreneau?: ICreneau[];
  public terre: ITerrain | any;
  public selectedterrain: number = 1;
  constructor(
    private creneauService: CreneauService,
    private terrainService: TerrainService
  ) {}

  ngOnInit(): void {}

  loadCreneau(): void {
    
      this.creneauService
        .findDispo(this.selectedterrain, this.dateres)
        .subscribe((data) => {
          this.availablecreneau = data;
        });
     
  }
}

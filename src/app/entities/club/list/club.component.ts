import { Component, OnInit } from '@angular/core';
import { IClub } from '../club.model';
import { ClubService } from '../service/club.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css'],
})
export class ClubComponent implements OnInit {
  club: IClub[] | undefined; 

  constructor(private clubService: ClubService) {

  }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.clubService.list().subscribe((data) => {this.club = data
      console.warn(this.club)}
      
      )
  }
}

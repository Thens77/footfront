import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../club/club.model';
import { TerrainService } from '../service/terrain.service';
import { ITerrain, Terrain } from '../terrain.model';
import { UntypedFormBuilder } from '@angular/forms';


@Component({
  selector: 'app-terrain-update',
  templateUrl: './terrain-update.component.html',
  styleUrls: ['./terrain-update.component.css']
})
export class TerrainUpdateComponent implements OnInit {
  terrain: Terrain = new Terrain();
  id!: number;
  photos!: File;
  size: string | any;
  nbrJoueurs: number | any;
  prix: number | any;
  description: string | any;
  club: Club = new Club();

  imageName: any;
  editForm = this.fb.group({
    id: [],
    size: [],
    nbrJoueurs: [],
    prix: [],
    description: [],
 
    club: [],
  });

  constructor(
 
    private router: Router,
    public dialog: MatDialog,
    private terrainService: TerrainService,
    protected fb: UntypedFormBuilder,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  getClub(): void {
    this.terrainService.find(this.id!).subscribe(
      (data) => {
        this.terrain = data;
      },
      (error) => console.log(error)
    );
  }
  public onFileChanged(event: any) {
    //Select File
    this.photos = event.target.files[0];
    console.log('haa hiiyaaa lfile  ' + this.photos.name);
    console.log('haa hiiyaaa sizee ' + this.photos?.size);
    this.handleFileSelect(event);
  }
  private base64textString: String = '';

  handleFileSelect(evt: any) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this.photos);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.club.picByte = btoa(binaryString);
    console.log('lakhraaaaaaaaa :' + this.club.photos);
  }
  protected updateForm(terrain: ITerrain): void {
    this.editForm.patchValue({
      id: terrain.id,
      size: terrain.size,
      nbrJoueurs: terrain.nbrJoueurs,
      prix: terrain.prix,
      description: terrain.description,

      club: terrain.club,
    });
  }

  save(): void {
    console.log(this.terrain.description + "////////////////////////////////////////////////////////////////////////////////////");
    if (this.editForm.get(['id'])!.value === undefined) {
      this.terrainService.add(this.terrain).subscribe(
        (data) => {
         
          console.log(data);
        },
        (error) => console.log(error)
      );
    } else {
      this.terrainService.update(this.id, this.terrain).subscribe(
        (data) => {
          console.log(data);
         
          
        },
        (error) => console.log(error)
      );
    }
  }

 
  
}

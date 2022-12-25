import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club, IClub } from '../club.model';
import { ClubService } from '../service/club.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-club-update',
  templateUrl: './club-update.component.html',
  styleUrls: ['./club-update.component.css']
})
export class ClubUpdateComponent implements OnInit {
  club: Club = new Club();
  id!: number;
  selectedFile!: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  apiLoaded: Observable<boolean> | undefined;

  imageName: any;
  editForm = this.fb.group({
    id : [] , 
    idFiscal:[],
    description:[],
    clubName: [],
    latitude:[],
    longitude:[],
    proprietaire:[] ,
   
  });

  constructor(httpClient: HttpClient ,private router :Router ,private location : Location ,public dialog: MatDialog , private clubService : ClubService , protected fb: FormBuilder , protected activatedRoute : ActivatedRoute) { 
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params["id"];
  }

  getClub():void {
    this.clubService.get (this.id!).subscribe( (data: Club ) => {
      this.club = data ;
    }, error => console.log(error))
  }
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
    console.log("haa hiiyaaa lfile  "+ this.selectedFile.name);
    console.log("haa hiiyaaa sizee "+ this.selectedFile?.size);
    this.handleFileSelect(event);

  }
  private base64textString:String="";
  
 
  handleFileSelect(evt : any){
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

_handleReaderLoaded(readerEvt : any) {
   var binaryString = readerEvt.target.result;
          this.club.picByte= btoa(binaryString);
          console.log("lakhraaaaaaaaa :"+this.club.picByte);
  }
  protected updateForm(club: IClub): void {
    this.editForm.patchValue({
      id : club.id, 
      idFiscal: club.idFiscal,
      description: club.description,
      clubName: club.clubName,
      latitude: club.latitude,
      longitude: club.longitude,
      proprietaire: club.proprietaire ,
      picByte :club.picByte,

    });
  }

  save():void{
    console.log(this.club.description);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.clubService.add(this.club).subscribe(data =>{
        this.openDialog('500ms', '500ms');
        console.log(data);
      },
      error => console.log(error)
      );
    }
   else{
    this.clubService.update(this.id,this.club).subscribe(data =>{
      console.log(data);
      this.openDialog('500ms', '500ms');
    },
    error => console.log(error)
    )
   }

   
  }
 
    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      let dialogRef = this.dialog.open( SuccessAlertDialog , {
        width: '250px'
       
      });

      dialogRef.afterClosed().subscribe(result => {
        this.router.navigate(['dashboard/matieres']);
      });
    }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'success-alert-dialog.html',
})
export class SuccessAlertDialog {
  constructor(public dialogRef: MatDialogRef<SuccessAlertDialog>) {

  }

  closeDialog() {
    //Write your stuff here
    this.dialogRef.close(); // <- Closes the dialog
  }
}

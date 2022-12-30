import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Creneau, ICreneau } from '../creneau.model';
import { CreneauService } from '../service/creneau.service';

@Component({
  selector: 'app-creneau-update',
  templateUrl: './creneau-update.component.html',
  styleUrls: ['./creneau-update.component.css']
})
export class CreneauUpdateComponent implements OnInit {
  creneau: Creneau = new Creneau();
  id!: number | undefined;
  editForm = this.fb.group({
    id: [],
    heureDebut: [],
    heureFin: [],
    
  });
  constructor(public dialog: MatDialog ,private creneauService : CreneauService ,private router : Router, protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.id =this.activatedRoute.snapshot.params["id"];
    this.creneauService.find(this.id!).subscribe( data => {
      this.creneau = data ;
    }, error => console.log(error))
  
  }

  protected updateForm(creneau: ICreneau): void {
    this.editForm.patchValue({
      id: creneau.id,
      heureDebut : creneau.heureDebut,
      heureFin: creneau.heureFin,
    });
  }
  seconds = true;
  save():void{
    
    console.log("amm "+this.creneau.heureDebut);
    
   // this.editForm.reset();
    console.log(this.creneau.heureFin);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.creneau.heureDebut =  `${this.creneau.heureDebut}:00`
      this.creneau.heureFin =  `${this.creneau.heureFin}:00`
      this.creneauService.add(this.creneau).subscribe(data =>{
        this.openDialog('500ms', '500ms');
        console.log(data);
        //this.router.navigate(['/dashboard/creneau'])
        console.log("done")
        this.editForm.reset();
        this.editForm.get(['id'])!.setValue(undefined);
        this.creneau.id = undefined ; 
      },
      error => console.log(error)
      );
    }
   else{
    this.creneau.heureDebut =  `${this.creneau.heureDebut}`
      this.creneau.heureFin =  `${this.creneau.heureFin}`
    this.creneauService.update(this.id!,this.creneau).subscribe(data =>{
      this.openDialog('500ms', '500ms');
      console.log(data);
      this.router.navigate(['/dashboard/creneau'])

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
      // this.router.navigate(['dashboard/matieres']);
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

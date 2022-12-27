import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Creneau, ICreneau } from '../creneau.model';
import { CreneauService } from '../service/creneau.service';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';


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
  constructor(private creneauService : CreneauService ,private router : Router, protected fb: FormBuilder , protected activatedRoute : ActivatedRoute) { }

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
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  seconds = true;
  save():void{
    this.creneau.heureDebut =  `${this.creneau.heureDebut}:00`
    this.creneau.heureFin =  `${this.creneau.heureFin}:00`
    console.log("amm "+this.creneau.heureDebut);
    
   // this.editForm.reset();
    console.log(this.creneau.heureFin);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.creneauService.add(this.creneau).subscribe(data =>{
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
    this.creneauService.update(this.id!,this.creneau).subscribe(data =>{
      console.log(data);
      this.router.navigate(['/dashboard/creneau'])

    },
    error => console.log(error)
    )
   }
   
  }
}

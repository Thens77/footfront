import { Proprietaire } from "../proprietaire/proprietaire.model";

export interface IClub {
  id? : number; 
  idFiscal?: number;
  description?: string;
  clubName?: string;
  latitude?: number;
  longitude?: number;
  proprietaire?: Proprietaire;
  photos?: string;
  picByte?  : string ;
}

export class Club implements IClub {
  constructor(
    public id? : number ,
    public idFiscal?: number,
    public description?: string,
    public clubName?: string,
    public latitude?: number,
    public longitude?: number,
    public proprietaire?: Proprietaire,
    public photos?: string ,
    public  picByte?  : string 
  ) {}
}

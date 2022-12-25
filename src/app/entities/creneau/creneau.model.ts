export interface ICreneau {
  id?: number;
  heureDebut?: string;
  heureFin?: string;
}
export class Creneau implements ICreneau {
  constructor(
    public id: number,
    public heureDebut: string,
    public heureFin: string
  ) {}
}

import { Client } from "../client/client.model";

export interface ICommentaire{
    id? : number;
    desc? : string;
    client? : Client;
}
export class Commentaire implements ICommentaire {
  constructor(public id : number, public desc: string, public client : Client) {}
}

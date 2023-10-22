import { Pays } from "./pays.enum";

export class Echange {
   id: any;
   nom: any;
   description: any;
   dateDebut: any;
   dateFin: any;
   nbparticipant: any;
   pays?: Pays; // Make sure 'Pays' is defined or imported correctly
}

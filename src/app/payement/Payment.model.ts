import { Country } from "./Country.enum";
import { Status } from "./Status.enum";

export class Payment {
   id_payment: any;
   name_on_Card: any;
   card_Number: any;
   mm: any;
   yy: any;
   cvv: any;
   montant: any;
   country!: Country; // Assuming 'Country' is a string property
   statusType!: Status; // Assuming 'StatusType' is a string property
   user: any;
 }
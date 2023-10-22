import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { CountryService } from 'src/app/demo/service/country.service';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { Product } from 'src/app/demo/api/product';
import { Echange } from './echange.model';
import { EchangeService } from './echange.service';
import { Pays } from './pays.enum';
import { ProductService } from '../demo/service/product.service';

@Component({
  selector: 'app-echange',
  templateUrl: './echange.component.html',
  styleUrls: ['./echange.component.scss']
})
export class EchangeComponent implements OnInit {


  filteredCountries: any[] = [];

  selectedCountryAdvanced: any[] = [];

  valSlider = 50;

  valColor = '#424242';

 

    @ViewChild('filter') filter!: ElementRef;
    echanges: Echange[] = [];
    echange: Echange = new Echange();
    paysOptions: Pays[] = Object.values(Pays);


   


    

    






  constructor ( private productService: ProductService,private echangeService :EchangeService) { }

  ngOnInit() {    
       
      this.echangeService.getEchanges().subscribe(echanges => {
        this.echanges = echanges;
        console.log(this.echanges)
      }
      );
      this.echange = new Echange();    

}





onSubmit() {

  this.echangeService.createEchange(this.echange).subscribe(
    (createdEchange) => {
      
      console.log(createdEchange);
      // Success: Reset the form or take other actions
    },
    (error) => {
      console.log(error);
      // Handle the error
    }
  );
}

  deleteEchange(id: number): void {
    this.echangeService.deleteEchange(id).subscribe(
      () => {
        console.log('Échange supprimé avec succès');
        // Mettez à jour votre liste d'échanges ici si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'échange:', error);
        // Gérez l'erreur ici
      }
    );}
    updateEchange(echange: Echange) {
      this.echangeService.updateEchange(this.echange).subscribe(
        (updatedEchange) => {
          console.log('Programme d\'échange mis à jour avec succès:', updatedEchange);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du programme d\'échange:', error);
        }
      );
    }

     




}

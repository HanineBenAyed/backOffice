import { Component, OnInit } from '@angular/core';
import { Product } from '../demo/api/product';
import { ProductService } from '../demo/service/product.service';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Echange } from './echange.model';
import { Pays } from './pays.enum';
import { EchangeService } from './echange.service';

@Component({
  templateUrl: './programme.component.html',
  providers: [MessageService]

})
export class ProgrammeComponent implements OnInit {
  
  productDialog: boolean = false;
  editDialog:boolean =false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  products: Product[] = [];

  product: Product = {};

  selectedProducts: Echange[] = [];
  selectedEchange!: Echange;


  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];
  echanges: Echange[] = [];
  echange: Echange = new Echange();
  paysOptions: Pays[] = Object.values(Pays);


  constructor(private productService: ProductService, private messageService: MessageService,private echangeService :EchangeService) { }

  ngOnInit() {
    this.echangeService.getEchanges().subscribe(echanges => {
      this.echanges = echanges;
      console.log(this.echanges)
    }
    );
    this.echange = new Echange();    
      this.cols = [
          { field: 'product', header: 'Product' },
          { field: 'price', header: 'Price' },
          { field: 'category', header: 'Category' },
          { field: 'rating', header: 'Reviews' },
          { field: 'inventoryStatus', header: 'Status' }
      ];

      this.statuses = [
          { label: 'INSTOCK', value: 'instock' },
          { label: 'LOWSTOCK', value: 'lowstock' },
          { label: 'OUTOFSTOCK', value: 'outofstock' }
      ];
  }

  openNew() {
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
  }
  openEdit(echange: Echange) {
    // Make a copy of the selected Echange to prevent modifying the original data
    this.selectedEchange = { ...echange };
    this.editDialog = true;
}
  deleteSelectedProducts() {
      this.deleteProductsDialog = true;
  }



  deleteProduct(product: Echange) {
      this.deleteProductDialog = true;
      this.product = { ...product };
  }

  confirmDeleteSelected(id:number) {
    console.log(this.echange);
    this.echangeService.deleteEchange(id).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });

        console.log('Échange supprimé avec succès');
        // Mettez à jour votre liste d'échanges ici si nécessaire
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'échange:', error);
        // Gérez l'erreur ici
      }
    );
  }

  confirmDelete() {
      this.deleteProductDialog = false;
      this.products = this.products.filter(val => val.id !== this.product.id);
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      this.product = {};
  }

  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {
   
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
      
  

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < 5; i++) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

  onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  
  editProduct(res:Echange){
      
  
     this.echangeService.updateEchange(res,res.id).subscribe((data: any) => {
      this.echanges = [...this.echanges];
      this.editDialog = true;          
      
      this.messageService.add({ severity: 'success', summary: 'Succés', detail: 'Ressources modifiée', life: 3000 });
     
    });
    }
   
    edit(echanges: Echange) {
      console.log(echanges);
        this.echanges =  [...this.echanges] ;
        this.productDialog = true;
        //this.openEdit();
    }
    

}
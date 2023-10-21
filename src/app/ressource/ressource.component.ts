import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/demo/api/product';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ProductService } from 'src/app/demo/service/product.service';
import { Ressources } from '../models/ressource';
import { RessourcesService } from '../services/ressourcesService/ressources.service';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss'],
  providers: [MessageService]

})
export class RessourceComponent  implements OnInit {
  productDialog: boolean = false;
  addDialog: boolean = false;


  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  products: Product[] = [];

  product: Product = {};
  
  ressource : any={};

  ressources!: any;
res : Ressources=new Ressources();

  selectedProducts: Product[] = [];

  submitted: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(private productService: ProductService, private messageService: MessageService, private ressourcesService: RessourcesService) { }

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data);
    this.getAllRessources();


  }

  getAllRessources(){
    this.ressourcesService.getAllRessources().subscribe((ressources: Ressources[]) => {
   
     this.ressources=ressources;
     console.log(this.ressources);
   });
    }



    addRessources(){
        this.ressourcesService.addRessources(this.res).subscribe((data: any) => {
       
         console.log(data);
         this.products = [...this.products];
         this.addDialog = false;
         this.messageService.add({ severity: 'success', summary: 'Succés', detail: 'Ressources ajoutée', life: 3000 });
        
       });

       
        }

        updateRessource(res:Ressources){
       
            this.ressourcesService.updateEvent(res.idRs, res).subscribe((data: any) => {
           
             this.products = [...this.products];
             this.productDialog = false;
             this.messageService.add({ severity: 'success', summary: 'Succés', detail: 'Ressources modifiée', life: 3000 });
            
           });
    
           
            }

  openNew() {
      this.product = {};
      this.submitted = false;
      this.addDialog = true;
  }

  openEdit() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
}
 

  deleteSelectedProducts() {
      this.deleteProductsDialog = true;
  }

  editProduct(ressources: Ressources) {
    console.log(ressources);
      this.ressource = { ...ressources };
      this.productDialog = true;
      //this.openEdit();
  }

  deleteProduct(product: Product) {


    
      this.deleteProductDialog = true;
      this.product = { ...product };
  }

  confirmDeleteSelected() {
      this.deleteProductsDialog = false;
      this.products = this.products.filter(val => !this.selectedProducts.includes(val));
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      this.selectedProducts = [];
  }

  confirmDelete(res : Ressources) {

    this.ressourcesService.deleteRess(res.idRs).subscribe((data: any) => {
           
        this.ressources = [...this.ressources];
        this.productDialog = false;
       
      });


      this.deleteProductDialog = false;
      this.messageService.add({ severity: 'error', summary: 'Deleted', detail: 'Ressource supprimée', life: 3000 });
      this.product = {};
  }


  
  hideDialog() {
      this.productDialog = false;
      this.submitted = false;
  }

  saveProduct() {
      
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
}

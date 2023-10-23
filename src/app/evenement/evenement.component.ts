import { Component, OnInit } from "@angular/core";
import { Product } from "../demo/api/product";
import { ProductService } from "../demo/service/product.service";
import { EventService } from "./event.service";
import { PhotoService } from "../demo/service/photo.service";
import { observable } from "rxjs";

import { Event } from "./event.model";
import { TypeEvent } from "./typeEvent.enum";
import { Router } from "@angular/router";
import { FileService } from "./file.service";
import { SafeUrl } from "@angular/platform-browser";


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {

    event: Event = new Event();
    
  
  products!: Product[];
  events : Event[]=[];
  
  res : Event=new Event();

  images!: any[];
  selectedFiles: FileList | null = null;
  successMessage = '';


  entrepriseOptions: any[] = [
    { label: 'NATILAIT', value: 'NATILAIT' },
    { label: 'POULINAGROUPHOLDING', value: 'POULINAGROUPHOLDING' },
    { label: 'KOLSI-COSMETICS', value: 'KOLSI-COSMETICS' },
    { label: 'MONOPRIX', value: 'MONOPRIX' },
    { label: 'MAGASIN-GENERALE', value: 'MAGASIN-GENERALE' },
    { label: 'MY-TEK', value: 'MY-TEK' },
    { label: 'EL-MOURADI', value: 'EL-MOURADI' }
  ];

  selectedEntreprise: string | undefined;

  product: Product = {};
  eventss: Event [] = [];
  submitted: boolean = false;
  productDialog: boolean = false;
  detailDialog: boolean = false;
  addDialog: boolean = false;
  deleteProductDialog: boolean = false;
  imagess: SafeUrl[] = [];
  galleriaResponsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '960px',
          numVisible: 4
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  carouselResponsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  eventOptions: TypeEvent[] = Object.values(TypeEvent);

  constructor(private productService: ProductService  , private eventService:EventService,
     private photoService: PhotoService,
     private router: Router,
     private fileService: FileService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then(products => {
        this.products = products;
    });
    this.getAllEvents();
    this.photoService.getImages().then((images: any[]) => {
        this.images = images;
    });

  }
  arrayBufferToBase64(image: string): string {
    return 'data:image/jpeg;base64,' + image;
}
  getAllEvents(){
    this.eventService.getAllEvents().subscribe((events: any) => {
   
     this.events=events;
     console.log(this.events);
   });
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.addDialog = true;
    }
    openDetail() {
        this.product = {};
        this.submitted = false;
        this.detailDialog = true;
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
    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    
    deleteProduct(product: Product) {
        this.deleteProductDialog = true;
        this.product = { ...product };
    }
    
    editProduct(event: Event) {
        console.log(event);
          this.event = { ...event };
          this.productDialog = true;
          //this.openEdit();
      }

      updateEvent(event:Event){
       
        this.eventService.updateEvent(event).subscribe((data: any) => {
       
         this.products = [...this.products];
         this.productDialog = false;
        
       });

       
        }

        confirmDelete(event : Event) {

            console.log(this.event)
            this.eventService.deleteEvent(event.idEvent).subscribe((data: any) => {
                   
                this.events = [...this.events];
                this.productDialog = false;
               
              });
        
        
              
          }
          addEvent(){
            this.eventService.addEvent(this.res).subscribe((data: any) => {
           
             console.log(data);
             this.products = [...this.products];
             this.addDialog = false;
            
           });
    
           
            }
            
            onSubmit(): void {
                if (this.selectedFiles) {
                  const formData = new FormData();
                  for (let i = 0; i < this.selectedFiles.length; i++) {
                    formData.append('files', this.selectedFiles[i]);
                  }
                  formData.append('nom', this.event.nom || '');
                  formData.append('description', this.event.description || '');
                  formData.append('lieu', this.event.lieu || '');
                  formData.append('num', this.event.numTel || '');
                  formData.append('prix', this.event.prixTicket || '');
                  formData.append('nomprop', this.event.nomProprietaire || '');
              
                  this.fileService.upload(formData).subscribe(
                    (response) => {
                      console.log('Réponse du serveur :', response);
                      this.successMessage = 'Événement créé avec succès!';
                      this.router.navigate(['/evenement/liste']);
                    },
                    (error) => {
                      console.error('Erreur lors de l\'appel API :', error);
                    }
                  );
                }
                
              }
              
            
            selectFile(event: any): void {
                this.selectedFiles = event.target.files;
            }
  
    
}



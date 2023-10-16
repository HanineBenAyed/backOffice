import { Component, OnInit } from "@angular/core";
import { Product } from "../demo/api/product";
import { ProductService } from "../demo/service/product.service";
import { EventService } from "./event.service";
import { PhotoService } from "../demo/service/photo.service";
import { observable } from "rxjs";
import { MessageService } from "primeng/api";


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  
  products!: Product[];
  events : Event[]=[];


  images!: any[];

  product: Product = {};
  
  submitted: boolean = false;
  productDialog: boolean = false;
  deleteProductDialog: boolean = false;
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

  constructor(private productService: ProductService  , private eventService:EventService, private photoService: PhotoService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(products => {
          this.products = products;
      });
      this.getAllEvents();
      this.photoService.getImages().then((images: any[]) => {
          this.images = images;
      });


  }
  getAllEvents(){
    this.eventService.getAllEvents().subscribe((events: Event[]) => {
   
     this.events=events;
     console.log(this.events);
   });
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
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
    
  
  
    
}



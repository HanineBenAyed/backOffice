import { ChangeDetectorRef,Component, OnInit, ViewChild, ElementRef,Renderer2 } from '@angular/core';
import { Table } from 'primeng/table';
import { ReclamationService } from '../services/reclamation.service';
import { Reclamation } from '../models/Reclamation';
import {Status } from '../models/status.enum'
import { Observable } from 'rxjs';

interface expandedRows {
  [key: string]: boolean;
}
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})

export class ReclamationComponent implements OnInit {

    rowGroupMetadata: any;
    expandedRows: expandedRows = {};
   
    isExpanded: boolean = false;

    reclamationRequests$: Observable<Reclamation[]>;
    reclamationRequests: Reclamation[] = [];
    reclamation: any = {}; 
    selectedReclamation: Reclamation = new Reclamation();
    displayUpdateDialog = false;
    displayDeleteConfirmation: boolean = false;

    @ViewChild('filter') filter!: ElementRef;

    constructor(private cd: ChangeDetectorRef,private reclamationService: ReclamationService,private renderer: Renderer2, private el: ElementRef) {
        
        this.reclamationRequests$ = new Observable<Reclamation[]>();

    }

    ngOnInit() {

        this.loadReclamationRequests();
    }
  
    loadReclamationRequests() {
        this.reclamationService.getReclamations().subscribe((requests) => {
          this.reclamationRequests = requests;
          this.cd.detectChanges();
        });
    }

    onSort() {
        this.updateRowGroupMetaData();
    }

    updateRowGroupMetaData() {
        this.rowGroupMetadata = {}; }
    

    updateReclamation(reclamation: Reclamation) {
            this.reclamationService.updateReclamation(reclamation).subscribe((updatedReclamation) => {
              console.log('Reclamation updated:', updatedReclamation);
            
              this.displayUpdateDialog = false;
            });
            this.loadReclamationRequests();
          }
        
    showUpdateDialog(reclamation: Reclamation) {
            this.selectedReclamation = { ...reclamation }; 
            this.displayUpdateDialog = true;
            this.loadReclamationRequests();
          }
        
    closeUpdateDialog() {
            this.displayUpdateDialog = false;

          }

    expandAll() {
        if (!this.isExpanded) {
          

        } else {
            this.expandedRows = {};
        }
        this.isExpanded = !this.isExpanded;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }



    showDeleteConfirmation(reclamation: Reclamation) {
        this.selectedReclamation = reclamation;
        this.displayDeleteConfirmation = true;
      }
      
    deleteReclamation() {
        this.reclamationService.deleteReclamation(this.selectedReclamation.idReclamation).subscribe(() => {
          this.displayDeleteConfirmation = false;
          this.loadReclamationRequests();
        });
        
      }
      
    cancelDelete() {
        this.displayDeleteConfirmation = false;
      }
      

}

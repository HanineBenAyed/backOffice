import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reclamation } from '../models/Reclamation';
import { Status } from '../models/status.enum';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Input() display: boolean = false;
  @Input() reclamation : Reclamation = { idReclamation: 0,name:'nahawand', details: '', status: Status.Done };
  @Output() update = new EventEmitter<Reclamation>();
  @Output() close = new EventEmitter<void>();

  statusOptions = [
    { label: 'Done', value: Status.Done },
    { label: 'Not Done', value: Status.NotDone }
  ];

  onSave() {
    this.update.emit(this.reclamation);
    console.log('Selected Status:', this.reclamation.status);
    this.display = false;
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}

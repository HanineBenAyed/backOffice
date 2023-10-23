import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../payement/payment.service';
import { MenuItem, MessageService } from 'primeng/api';
import { Payment } from '../payement/Payment.model';

@Component({
  templateUrl: './participant.component.html',
  providers: [MessageService]
})
export class ParticipantComponent implements OnInit{

  payment: Payment | undefined; // Initialize as undefined

  items: MenuItem[] = [];
  cardMenu: MenuItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.items = [
      { label: 'Angular.io', icon: 'pi pi-external-link', url: 'http://angular.io' },
      { label: 'Theming', icon: 'pi pi-bookmark', routerLink: ['/theming'] },
    ];

    this.cardMenu = [
      {
        label: 'Retour au payement ', icon: 'pi pi-fw pi-check', routerLink: ['/payement']
      },
     
    ];

    this.route.params.subscribe((params) => {
      const id_payment = +params['id']; // Use 'id' instead of 'id_payment' and convert it to a number
      if (!isNaN(id_payment)) {
        // Fetch the Payment details by ID
        this.paymentService.getPaymentById(id_payment).subscribe((payment) => {
          this.payment = payment;
        });
      }
    });
  }
}

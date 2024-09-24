import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-successful',
  templateUrl: './payment-successful.component.html',
  styleUrl: './payment-successful.component.scss'
})
export class PaymentSuccessfulComponent {

  transactionId = '';
  amount = '1419.00';
  payedBy = 'Paytm';

  constructor(private router: Router, public sharedService: SharedService) { }

  ngOnInit(): void {
    this.transactionId = this.sharedService.generateTransactionID();
  }

  backTo() {    
    this.router.navigate(['/']);
  }

}

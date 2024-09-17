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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.transactionId = this.sharedService.generateTransactionID();
  }

  backTo() {
    console.log('>>>ksfgn');
    
    this.router.navigate(['/']);
  }

}

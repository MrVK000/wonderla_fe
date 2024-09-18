import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {

  isBookingForSomeone: boolean = false;
  grandTotal: string = '0.00';
  // selectedLocation: string = 'HYDERBAD';
  selectedDate: any;
  visitors: string = '1';
  // total: string = '1202.54';
  selctedCount: number = 0;
  selctedMealsCount: number = 1;
  selectedType: string = 'Regular';
  selectedFor: string = 'Adult';
  // mealsPrice: string = '379.00';
  priceWithGst: string = '1798.00';
  fullName: string = '';
  phoneNumber: string = '';
  email: string = '';
  pinCode!: string;
  receiverFullName: string = '';
  receiverPhoneNumber: string = '';
  receiverEmail: string = '';

  constructor(public sharedService: SharedService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedService.onActiveIndexChange(5, false);
    this.selectedDate = this.sharedService.parkTicketDetails.date;
    const date = new Date(this.sharedService.parkTicketDetails.date);
    this.selectedDate = this.datePipe.transform(date, 'dd MMMM yyyy');
  }


  backToRules() {
    this.sharedService.onActiveIndexChange(4, false);
  }




  addTicket() {
    console.log('>>>');
  }



  removeTicket() {
    console.log('>>>');
  }











  goToPayment() {
    this.sharedService.isStepsCompleted = true;

  }
}

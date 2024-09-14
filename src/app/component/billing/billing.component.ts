import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {

  isBookingForSomeone: boolean = false;
  grandTotal: string = '0.00';
  selectedLocation: string = 'HYDERBAD';
  selectedDate: string = '25 September 2024';
  visitors: string = '1';
  total: string = '1202.54';
  selctedCount: number = 0;
  selctedMealsCount: number = 1;
  selectedType: string = 'Regular';
  selectedFor: string = 'Adult';
  mealsPrice: string = '379.00';
  priceWithGst: string = '1798.00';

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedService.onActiveIndexChange(5, false);
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











  agreedClicked() {
    console.log('>>>');

  }
}

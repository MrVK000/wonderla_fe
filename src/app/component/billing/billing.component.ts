import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {

  isBookingForSomeone: boolean = false;
  // selectedLocation: string = 'HYDERBAD';
  selectedDate: any;
  // visitors: string = '1';
  // total: string = '1202.54';
  selctedCount: number = 0;
  // selctedMealsCount: number = 1;
  selectedType: string = 'Regular';
  selectedFor: string = 'Adult';
  // mealsPrice: string = '379.00';
  // fullName: string = '';
  // phoneNumber: string = '';
  // email: string = '';
  // pinCode!: string;
  // receiverFullName: string = '';
  // receiverPhoneNumber: string = '';
  // receiverEmail: string = '';
  totalFoodAmount: string = '';

  constructor(public sharedService: SharedService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sharedService.onActiveIndexChange(5, false);
    }, 0);
    this.createForm();
    this.selectedDate = this.sharedService.parkTicketDetails.date;
    const date = new Date(this.sharedService.parkTicketDetails.date);
    this.selectedDate = this.datePipe.transform(date, 'dd MMMM yyyy');
    this.calculateMealsAmount();
    this.addGstWithTotal();
    console.log('>>>>', this.sharedService.parkTicketArrayOfArray);

  }


  backToRules() {
    this.sharedService.onActiveIndexChange(4, false);
  }

  primaryForm!: FormGroup;
  secondaryForm!: FormGroup;

  createForm() {
    this.primaryForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phNumber: new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pincode: new FormControl(null, [Validators.required, Validators.pattern(/^\d{6}$/)]),
    });
    this.secondaryForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phNumber: new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  calculateMealsAmount() {
    this.sharedService.mealsWrapper = [...this.sharedService.meal1, ...this.sharedService.meal2, ...this.sharedService.meal3, ...this.sharedService.meal4, ...this.sharedService.meal5, ...this.sharedService.meal6]
    let total = 0;
    this.sharedService.mealsWrapper.forEach((item: any) => {
      total += item.price;
    });
    this.totalFoodAmount = total.toFixed(2).toString();
    console.log('>>>>>', this.totalFoodAmount);
  }


  addTicket() {
    console.log('>>>');
  }



  removeTicket() {
    console.log('>>>');
  }


  addGstWithTotal() {
    let ticketMmount = 0;
    let mealsMmount = 0;
    this.sharedService.parkTicketWrapper.forEach((element: any) => {
      ticketMmount = ticketMmount + (Number(element.price) + parseFloat(this.sharedService.CONSTANTS.parkTicketBillingGstPrice));
    });
    this.sharedService.mealsWrapper.forEach((element: any) => {
      mealsMmount = mealsMmount + (Number(element.price) + parseFloat(this.sharedService.CONSTANTS.parkTicketBillingGstPrice));
    });
    this.sharedService.grandTotal = (ticketMmount + mealsMmount).toFixed(2).toString();
  }


  getTheTicketPrice(array: any) {
    let price = 0;
    array.forEach((element: any) => {
      price += Number(element.price);
    });
    return price;
  }



  //Please fill all the fields to continue..!!



  goToPayment() {
    // console.log('>>>form', this.primaryForm, this.secondaryForm, this.primaryForm.valid, this.secondaryForm.valid);

    if (this.isBookingForSomeone ? this.primaryForm.valid && this.secondaryForm.valid : this.primaryForm.valid) {
      this.sharedService.isStepsCompleted = true;
    }
    else {
      this.sharedService.showTheDialog('Please fill all the fields to continue..!!');
    }


  }
}

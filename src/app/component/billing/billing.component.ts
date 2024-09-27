import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {


  totalFoodAmount: string = '';


  primaryForm!: FormGroup;
  secondaryForm!: FormGroup;

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {

    setTimeout(() => {
      this.sharedService.onActiveIndexChange(5, false);
    }, 0);

    this.createForm();
    this.calculateMealsAmount();
    this.addGstWithTotal();

    if (this.sharedService.primaryForm) {
      this.primaryForm.patchValue(this.sharedService.primaryForm);
    }
    if (this.sharedService.secondaryForm) {
      this.secondaryForm.patchValue(this.sharedService.secondaryForm);
    }

  }


  backToRules() {
    this.sharedService.onActiveIndexChange(4, false);
  }


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


  addTicket(array: any, i: number) {
    console.log('>>>', array, i);
  }



  removeTicket(array: any, i: number) {
    console.log('>>>', array, i);
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


  goToPayment() {
    // console.log('>>>form', this.primaryForm, this.secondaryForm, this.primaryForm.valid, this.secondaryForm.valid);

    if (this.sharedService.pincode.includes(this.primaryForm.value.pincode)) {
      if (this.sharedService.isBookingForSomeone ? this.primaryForm.valid && this.secondaryForm.valid : this.primaryForm.valid) {
        this.sharedService.primaryForm = this.primaryForm.value;
        this.sharedService.secondaryForm = this.secondaryForm.value;
        this.sharedService.isStepsCompleted = true;
      }
      else {
        this.sharedService.showTheDialog('Please fill all the fields to continue..!!');
      }
    }
    else {
      this.sharedService.showTheDialog('Please enter a valid pincode to continue..!!');
    }

  }


}

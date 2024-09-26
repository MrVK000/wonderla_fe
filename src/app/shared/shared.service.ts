import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LabelInterface } from '../interfaces/dashboardInterface';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { cardData, mobileSliderImageData, offersCardData, sliderImageData, zigZagInterOneCardData, zigZagInterTwoCardData } from '../data/imgData';
import CONSTANT_VARIABLES from '../data/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //common loading
  isLoading: boolean = false;

  //image data
  cardData = cardData;
  CONSTANTS = CONSTANT_VARIABLES;
  offersCardData = offersCardData;
  sliderImageData = sliderImageData;
  mobileSliderImageData = mobileSliderImageData;
  zigZagInterTwoCardData = zigZagInterTwoCardData;
  zigZagInterOneCardData = zigZagInterOneCardData;

  //for date component
  endDate!: Date;
  startDate!: Date;
  todayDate: Date = new Date;
  tomorrowDate: Date = new Date(this.todayDate);

  //data for dropdown
  parkData: LabelInterface[] = [];
  hotelData: LabelInterface[] = [];
  outingData: LabelInterface[] = [];
  resortsData: LabelInterface[] = [];
  locationsData: LabelInterface[] = [];
  adultOptionData: LabelInterface[] = [];

  //dropdown selected options
  selectedHotel: LabelInterface | null = null;
  selectedLocation!: LabelInterface;
  selectedAdultOption!: LabelInterface;

  //for stepper
  activeIndex: number = 0;
  progressbarValue: number = 0;

  //payment details
  isStepsCompleted: boolean = false;

  //park loading
  isParkTicketLoading: boolean = false;

  //warning dialog
  showDialog: boolean = false;
  dialogContent: string = '';

  //booknow dialog
  showBookNowDialog: boolean = false;


  //park ticket details
  parkTicketDetails = {
    location: '',
    date: '',
    ticketPrice: '',
    mealsPrice: '',
  };

  //selectedtickets
  adult: any = [];
  adultOffer: any = [];
  child: any = [];
  senior: any = [];

  fastAdult: any = [];
  fastChild: any = [];

  collegeIdCombo: any = [];
  collegeId: any = [];
  birthday: any = [];
  womenFree: any = [];
  womenPaid: any = [];

  couponCode: string = '';
  gstn: string = '';

  parkTicketWrapper: any = [];
  parkTicketArrayOfArray: any = [];


  //selected meals
  meal1: any = [];
  meal2: any = [];
  meal3: any = [];
  meal4: any = [];
  meal5: any = [];
  meal6: any = [];

  mealsWrapper: any = [];



  grandTotal: string = '';







  // parkTicketWrapperArray = [...this.adult, ...this.adultOffer, ...this.child, ...this.senior, ...this.fastAdult, ...this.fastChild, ...this.collegeIdCombo, ...this.collegeId, ...this.birthday, ...this.womenFree, ...this.womenPaid];
  // parkTicketWrapperArray = [...this.adult];
  // parkTicketWrapperArray :any= [];
  // parkTicketWrapperArray = [...[{na:'hii'}]];


  constructor(public messageService: MessageService, public router: Router,) { }

  clearToast() {
    setTimeout(() => {
      this.messageService.clear();
    }, 3000);
  }


  locationChanged(event: DropdownChangeEvent) {

    const locationId = event.value.id;
    if (locationId == 0) {
      this.hotelData = this.parkData;
    }
    else if (locationId == 1) {
      this.hotelData = this.resortsData;
      this.selectedAdultOption = this.adultOptionData[1];
      this.startDate = this.todayDate;
      this.endDate = this.tomorrowDate;
    }
    else if (locationId == 2) {
      this.hotelData = this.outingData;
    }
    this.selectedHotel = this.hotelData[0];
    // console.log('>>>', event, this.selectedHotel,this.hotelData);
  }



  propertyChanged(event: DropdownChangeEvent) {
    console.log('>>>>property', event);
  }



  bookTicket() {
    this.showBookNowDialog = false;
    if (this.selectedHotel?.id === 0) {
      this.router.navigate(['/park-ticket']);
    }
  }


  logoClicked() {
    window.location.reload();
  }


  onActiveIndexChange(index: number, isStepClicked: boolean) {
    if (index < this.activeIndex && isStepClicked) {
      this.activeIndex = index;
      this.progressbarValue = index * 20;
    }
    else if (!isStepClicked) {
      this.activeIndex = index;
      this.progressbarValue = index * 20;
    }
  }






  generateCalendar(month: number, year: number): Date[] {
    const dates: Date[] = [];

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);

    // Days from the previous month to fill the first week
    const startDay = firstDay.getDay();
    for (let i = startDay; i > 0; i--) {
      const prevDate = new Date(year, month, 1 - i);
      dates.push(prevDate);
    }

    // Days of the current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push(new Date(year, month, i));
    }

    // Days from the next month to fill the last week
    const endDay = lastDay.getDay();
    for (let i = 1; i < 7 - endDay; i++) {
      const nextDate = new Date(year, month + 1, i);
      dates.push(nextDate);
    }

    return dates;
  }






  generateTransactionID() {
    return Math.random().toString(18).slice(2);
  }





  showTheDialog(content: string) {
    this.showDialog = true;
    this.dialogContent = content;
  }







}

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

  isLoading: boolean = false;

  mobileSliderImageData = mobileSliderImageData;
  CONSTANTS = CONSTANT_VARIABLES;

  cardData = cardData;
  offersCardData = offersCardData;
  sliderImageData = sliderImageData;
  zigZagInterTwoCardData = zigZagInterTwoCardData;
  zigZagInterOneCardData = zigZagInterOneCardData;

  endDate!: Date;
  startDate!: Date;
  todayDate: Date = new Date;
  tomorrowDate: Date = new Date(this.todayDate);

  selectedLocation!: LabelInterface;
  locationsData: LabelInterface[] = [];
  parkData: LabelInterface[] = [];
  hotelData: LabelInterface[] = [];
  outingData: LabelInterface[] = [];
  selectedHotel: LabelInterface | null = null;
  selectedAdultOption!: LabelInterface;
  resortsData: LabelInterface[] = [];

  adultOptionData: LabelInterface[] = [
    {
      label: '1',
      id: 0
    },
    {
      label: '2',
      id: 1
    },
    {
      label: '3',
      id: 2
    },
  ]
  activeIndex: number = 2;
  progressbarValue: number = 0;
  parkTicketDetails: any = {};

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


  showBookNowDialog: boolean = false;

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


















}

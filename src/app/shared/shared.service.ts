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



}

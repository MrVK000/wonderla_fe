import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LabelInterface } from '../interfaces/dashboardInterface';
import { DropdownChangeEvent } from 'primeng/dropdown';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

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

  constructor(public messageService: MessageService,) { }

  clearToast() {
    setTimeout(() => {
      this.messageService.clear();
    }, 3000);
  }


  locationChanged(event: DropdownChangeEvent) {
    console.log('>>>>>selectedLocation', this.selectedLocation);

    const locationId = event.value.id;
    if (locationId == 0) {
      this.hotelData = this.parkData;
    }
    else if (locationId == 1) {
      this.hotelData = this.resortsData;
      this.selectedAdultOption = this.adultOptionData[1];
      this.startDate = this.todayDate;
      this.endDate = this.tomorrowDate;
      // console.log('>>>this.startDate',this.startDate);

    }
    else if (locationId == 2) {
      this.hotelData = this.outingData;
    }
    this.selectedHotel = this.hotelData[0] as LabelInterface;
  }



  propertyChanged(event: DropdownChangeEvent) {
    console.log('>>>>property', event);

  }




}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss'
})
export class LocationComponent {

  parkLocationData = [
    {
      label: 'KOCHI',
      url: '../../../assets/parkTicketLocation/kerala2.png',
    },
    {
      label: 'BENGALURU',
      url: '../../../assets/parkTicketLocation/blr2.png',
    },
    {
      label: 'HYDERABAD',
      url: '../../../assets/parkTicketLocation/hyd2.png',
    },
    {
      label: 'BHUBANESWAR',
      url: '../../../assets/parkTicketLocation/Odisha2.png',
    },
  ]


  constructor(private router: Router, public sharedService: SharedService) { }

  ngOnInit(): void {
    setTimeout(() => {      
      this.sharedService.onActiveIndexChange(0, false);
    }, 0);
    // this.sharedService.isParkTicketLoading=true;
    this.sharedService.parkTicketDetails = {
      location: '',
      date: '',
      ticketPrice: '',
      mealsPrice: '',
    };
  }

  locationSelected(i: number) {
    this.sharedService.parkTicketDetails.location = this.parkLocationData[i]?.label;
    this.sharedService.onActiveIndexChange(1, false);
  }
}

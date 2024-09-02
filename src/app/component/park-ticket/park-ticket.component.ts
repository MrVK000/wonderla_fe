import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-park-ticket',
  templateUrl: './park-ticket.component.html',
  styleUrl: './park-ticket.component.scss'
})
export class ParkTicketComponent {

  isLoading: boolean = false;
  activeIndex: number = 0;
  progressbarValue: number = 0;

  stepsData = [
    {
      label: 'Location',
      command: (event: any) => { }
    },
    {
      label: 'Date',
      command: (event: any) => { }
    },
    {
      label: 'Tickets',
      command: (event: any) => { }
    },
    {
      label: 'Add-ons',
      command: (event: any) => { }
    },
    {
      label: 'Rules',
      command: (event: any) => { }
    },
    {
      label: 'Billing',
      command: (event: any) => { }
    },
  ];

  parkLocationData = [
    {
      label: 'KOCHI',
      url: '../../../assets/parkTicketLocation/kerala2.png'
    },
    {
      label: 'BENGALURU',
      url: '../../../assets/parkTicketLocation/blr2.png'
    },
    {
      label: 'HYDERABAD',
      url: '../../../assets/parkTicketLocation/hyd2.png'
    },
    {
      label: 'BHUBANESWAR',
      url: '../../../assets/parkTicketLocation/Odisha2.png'
    },
  ]

  selectedLocation = {};
  constructor(private router: Router, public sharedService: SharedService) { }


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


  isStepGreaterThanIndex(i: number): boolean {
    if (i <= this.activeIndex)
      return true;
    else
      return false
  }


  isStepCompleted(i: number): boolean {
    if (i < this.activeIndex)
      return true;
    else
      return false
  }

  locationSelected(i: number) {
    this.onActiveIndexChange(1, false);
    this.selectedLocation = this.parkLocationData[i];
  }



}

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


  stepsData = [
    {
      label: 'Location',
    },
    {
      label: 'Date',
    },
    {
      label: 'Tickets',
    },
    {
      label: 'Add-ons',
    },
    {
      label: 'Rules',
    },
    {
      label: 'Billing',
    },
  ];

  showSidebar: boolean = false;

  sidebarDate = [
    {
      label: 'Parks & Resort',
      isopen: false,
      types: [
        {
          label: 'Park',
          isopen: false,
          types: [
            {
              label: 'Kochi',
            },
            {
              label: 'Bengaluru',
            },
            {
              label: 'Hyderbad',
            },
          ]
        },
        {
          label: 'Resort',
          isopen: false,
          types: [
            {
              label: 'Bengaluru',
            },
          ]
        }
      ]
    },
    {
      label: 'My Bookings'
    },
    {
      label: 'Offers'
    },
    {
      label: 'Dress Code'
    },
    {
      label: 'Getting To Wonderla'
    },
    {
      label: 'Contact Us'
    },
  ]



  constructor(private router: Router, public sharedService: SharedService) { }



  isStepGreaterThanIndex(i: number): boolean {
    if (i <= this.sharedService.activeIndex)
      return true;
    else
      return false
  }


  isStepCompleted(i: number): boolean {
    if (i < this.sharedService.activeIndex)
      return true;
    else
      return false
  }


}

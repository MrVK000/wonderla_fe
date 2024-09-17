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
  ];


  selectedLocation = 'HYDERBAD';
  selectedDate = '25 September 2024';
  visitors = '1';
  fullName = 'James';
  phoneNumber = '1234567890';
  email = 'James@gmail.com';
  grandTotal = '1419.00';

  upiData = [
    {
      imgUrl: '../../../assets/parkTicket/payubiz.svg',
      description: 'Net Banking/Credit Card / Debit Card/UPI',
      isSelected: false,
    },
    {
      imgUrl: '../../../assets/parkTicket/paytm.svg',
      description: 'Paytm Wallet',
      isSelected: false,
    },
  ];




  constructor(private router: Router, public sharedService: SharedService) { }



  isStepGreaterThanIndex(i: number): boolean {
    if (i <= this.sharedService.activeIndex)
      return true;
    else
      return false;
  }


  isStepCompleted(i: number): boolean {
    if (i < this.sharedService.activeIndex)
      return true;
    else
      return false;
  }

  backToBilling() {
    this.sharedService.isStepsCompleted = false;
    this.sharedService.onActiveIndexChange(5, false);
  }

  paymentClicked(i: number) {
    console.log('>>>');

    if (i == 0) {
      this.upiData[0].isSelected = true;
      this.upiData[1].isSelected = false;
    }
    else {
      this.upiData[0].isSelected = false;
      this.upiData[1].isSelected = true;
    }
  }

  makePayment() {
    setTimeout(() => {
      this.router.navigate(['/payment-successful']);
    }, 2000);
  }





}

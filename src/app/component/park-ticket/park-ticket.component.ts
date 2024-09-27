import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-park-ticket',
  templateUrl: './park-ticket.component.html',
  styleUrl: './park-ticket.component.scss'
})
export class ParkTicketComponent {

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

  selectedPaymentMethod: boolean = false;


  constructor(private router: Router, public sharedService: SharedService, private apiService: ApiService) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.apiService.getPincode().subscribe((res) => {
      this.sharedService.pincode = res;
    });
  }


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
    if (!i) {
      this.upiData[0].isSelected = true;
      this.upiData[1].isSelected = false;
    }
    else {
      this.upiData[0].isSelected = false;
      this.upiData[1].isSelected = true;
    }
    this.sharedService.selectedPaymentMethod = i;
    this.selectedPaymentMethod = true;
  }

  makePayment() {
    if (this.selectedPaymentMethod) {
      this.sharedService.isParkTicketLoading = true;
      setTimeout(() => {
        this.sharedService.isParkTicketLoading = false;
        this.sharedService.isStepsCompleted = false;
        this.sharedService.parkTicketDetails = {
          location: '',
          date: '',
          ticketPrice: '',
          mealsPrice: '',
        };
        this.sharedService.onActiveIndexChange(0, false);
        this.router.navigate(['/payment-successful']);
      }, 2000);
    }
    else {
      this.sharedService.showTheDialog('Please select a payment method to continue....!!')
    }
  }





}

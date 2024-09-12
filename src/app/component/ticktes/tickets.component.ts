import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './ticktes.component.html',
  styleUrl: './tickets.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class ticketsComponent {

  couponData: any = [
    {
      description: 'Get 10% discount on Regular Adualt Tickets',
      code: 'ADVO3DAYS',
    },
    // {
    //   description: 'Get 10% discount on Regular Adualt Tickets',
    //   code: 'ADVO3DAYS',
    // },
  ];

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ticketData = [
    {
      title: 'Regular Ticket',
      description: 'Allows entry to any ride',
      imgUrl: '../../../assets/parkTicketTickets/regularImg.gif',
      icon: '../../../assets/parkTicketTickets/user.svg',
      background: '#cdd6ff',
      isOpen: false,
      child: [
        {
          title: '',
          price: '',
          profileImg: '',
          selcted: 0,
          isOfferAvailable: false,
          discountPrice: '',
          offer: '',
          description: '',
        },
        {
          title: '',
          price: '',
          profileImg: '',
          selcted: 0,
          isOfferAvailable: false,
          discountPrice: '',
          offer: '',
          description: '',
        },
        {
          title: '',
          price: '',
          profileImg: '',
          selcted: 0,
          isOfferAvailable: false,
          discountPrice: '',
          offer: '',
          description: '',
        },
      ],
    },
    {
      title: 'FastTrack Ticket',
      description: 'Skip The Que | 75% Faster',
      imgUrl: '../../../assets/parkTicketTickets/fastImg.gif',
      icon: '../../../assets/parkTicketTickets/user.svg',
      background: '#ffe75f',
      isOpen: false,
      child: [
        {
          title: '',
          price: '',
          profileImg: '',
          selcted: 0,
          isOfferAvailable: false,
          discountPrice: '',
          offer: '',
          description: '',
        },
        {
          title: '',
          price: '',
          profileImg: '',
          selcted: 0,
          isOfferAvailable: false,
          discountPrice: '',
          offer: '',
          description: '',
        },
      ],
    },
    {
      title: 'Offer Ticket',
      description: 'Exciting Offers',
      imgUrl: '../../../assets/parkTicketTickets/offerImg.svg',
      icon: '../../../assets/parkTicketTickets/user.svg',
      background: '',
      isOpen: false,
      child: [
        {
          title: '',
          price: '',
          profileImg: '',
          selcted: 0,
          isOfferAvailable: false,
          discountPrice: '',
          offer: '',
          description: '',
        },
        {
          title: '',
          price: '',
          profileImg: '',
          selcted: 0,
          isOfferAvailable: false,
          discountPrice: '',
          offer: '',
          description: '',
        },
        {
          title: '',
          price: '',
          profileImg: '',
          selcted: 0,
          isOfferAvailable: false,
          discountPrice: '',
          offer: '',
          description: '',
        },
        {
          title: '',
          price: '',
          profileImg: '',
          selcted: 0,
          isOfferAvailable: false,
          discountPrice: '',
          offer: '',
          description: '',
        },
        {
          title: '',
          price: '',
          profileImg: '',
          selcted: 0,
          isOfferAvailable: false,
          discountPrice: '',
          offer: '',
          description: '',
        },
      ],
    },
  ];

  totlaTicketAmount: string = '0.00';
  selectedTicket: number | null = null;

  constructor(private router: Router, public sharedService: SharedService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedService.onActiveIndexChange(2, false);
  }



  backToDate() {
    this.sharedService.onActiveIndexChange(1, false)
  }




  ticketClicked(i: number) {

    if (this.selectedTicket === i) {
      this.ticketData.forEach((ticket) => {
        ticket.isOpen = false;
      });
      this.selectedTicket = null;
    }
    else {
      this.ticketData.forEach((ticket) => {
        ticket.isOpen = false;
      });
      this.ticketData[i].isOpen = true;
      this.selectedTicket = i;
    }

  }




}

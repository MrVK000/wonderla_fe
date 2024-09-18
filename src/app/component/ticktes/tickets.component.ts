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
      totalSelectedTickets: 0,
      child: [
        {
          title: 'Adult',
          price: '1202.54',
          profileImg: '../../../assets/parkTicketTickets/user.svg',
          selctedCount: 0,
          isOfferAvailable: false,
          oldPrice: '',
          offer: '',
          description: '',
          isTicketsAvailable: true,
        },
        {
          title: 'Adult Ticket + Bucket Offer',
          price: '1549',
          profileImg: '../../../assets/parkTicketTickets/user.svg',
          selctedCount: 0,
          isOfferAvailable: true,
          oldPrice: '1918',
          offer: '20% Off',
          description: '',
          isTicketsAvailable: true,
        },
        {
          title: 'Child',
          price: '961.86',
          profileImg: '../../../assets/parkTicketTickets/user.svg',
          selctedCount: 0,
          isOfferAvailable: false,
          oldPrice: '',
          offer: '',
          description: '',
          isTicketsAvailable: true,
        },
        {
          title: 'Senior Citizen',
          price: '901.91',
          profileImg: '../../../assets/parkTicketTickets/user.svg',
          selctedCount: 0,
          isOfferAvailable: true,
          oldPrice: '1202.54',
          offer: '25% Off',
          description: '',
          isTicketsAvailable: true,
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
      totalSelectedTickets: 0,
      child: [
        {
          title: 'Fast Track Adult',
          price: '1924.06',
          profileImg: '../../../assets/parkTicketTickets/user.svg',
          selctedCount: 0,
          isOfferAvailable: false,
          oldPrice: '',
          offer: '',
          description: '',
          isTicketsAvailable: true,
        },
        {
          title: 'Fast Track Child',
          price: '1538.98',
          profileImg: '../../../assets/parkTicketTickets/user.svg',
          selctedCount: 0,
          isOfferAvailable: false,
          oldPrice: '',
          offer: '',
          description: '',
          isTicketsAvailable: true,
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
      totalSelectedTickets: 0,
      child: [
        {
          title: 'College ID + Biriyani Combo',
          price: '1284',
          profileImg: '../../../assets/parkTicketTickets/StudentIDPackage.png',
          selctedCount: 0,
          isOfferAvailable: true,
          oldPrice: '1779',
          offer: '29% Off',
          description: '(Get delicious Biryani combo at additional ₹149)',
          isTicketsAvailable: true,
        },
        {
          title: 'College ID Offer',
          price: '962.03',
          profileImg: '../../../assets/parkTicketTickets/Student+ID.png',
          selctedCount: 0,
          isOfferAvailable: true,
          oldPrice: '1202.54',
          offer: '21% Off',
          description: '',
          isTicketsAvailable: true,
        },
        {
          title: 'Birthday Offer - Free Ticket',
          price: '0.00',
          profileImg: '../../../assets/parkTicketTickets/BirthdayOffer.png',
          selctedCount: 0,
          isOfferAvailable: true,
          oldPrice: '1202.54',
          offer: '100% Off',
          description: '',
          isTicketsAvailable: true,
        },
        {
          title: 'Wonder Women - Free Ticket',
          price: '0.00',
          profileImg: '../../../assets/parkTicketTickets/FreeTicket.jpg',
          selctedCount: 0,
          isOfferAvailable: true,
          oldPrice: '1202.54',
          offer: '100% Off',
          description: '',
          isTicketsAvailable: true,
        },
        {
          title: 'Wonder Women - Paid Ticket',
          price: '1202.54',
          profileImg: '../../../assets/parkTicketTickets/PaidTicket.jpg',
          selctedCount: 0,
          isOfferAvailable: true,
          oldPrice: '1202.54',
          offer: '0% Off',
          description: '',
          isTicketsAvailable: false,
        },
      ],
    },
  ];

  totalTicketAmount: string = '0.00';
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



  addTicket(i: number, j: number) {
    // console.log('>>>', i, j, typeof (this.ticketData[i]?.child[j]?.selctedCount) == 'number');
    if (typeof (this.ticketData[i]?.child[j]?.selctedCount) == 'number') {
      this.ticketData[i].child[j].selctedCount++;
    }
    if (typeof (this.ticketData[i]?.totalSelectedTickets) == 'number') {
      this.ticketData[i].totalSelectedTickets++;
    }
    if (Number(this.ticketData[i].child[j].price) == 0) {
      this.totalTicketAmount = (Number(this.totalTicketAmount) + Number(this.ticketData[i].child[j].oldPrice)).toFixed(2).toString();
    }
    else {
      this.totalTicketAmount = (Number(this.totalTicketAmount) + Number(this.ticketData[i].child[j].price)).toFixed(2).toString();
    }
  }





  removeTicket(i: number, j: number) {
    // console.log('>>>', i, j);
    if (this.ticketData[i]?.child[j]?.selctedCount) {
      this.ticketData[i].child[j].selctedCount--;
    }
    if (this.ticketData[i]?.totalSelectedTickets) {
      this.ticketData[i].totalSelectedTickets--;
    }
    if (Number(this.ticketData[i].child[j].price) == 0 && Number(this.totalTicketAmount) >= 0 && (Number(this.totalTicketAmount) - Number(this.ticketData[i].child[j].price)) >= 0) {
      this.totalTicketAmount = (Number(this.totalTicketAmount) - Number(this.ticketData[i].child[j].oldPrice)).toFixed(2).toString();
    }
    else if (Number(this.totalTicketAmount) >= 0 && (Number(this.totalTicketAmount) - Number(this.ticketData[i].child[j].price)) >= 0) {
      this.totalTicketAmount = (Number(this.totalTicketAmount) - Number(this.ticketData[i].child[j].price)).toFixed(2).toString();
    }
  }








  confirmClicked() {
    if (this.totalTicketAmount !== '0.00') {
      this.sharedService.parkTicketDetails.ticketPrice=this.totalTicketAmount;
      this.sharedService.onActiveIndexChange(3, false);
    }
    else {
      this.sharedService.showTheDialog('Please add ticket/s to proceed!');
    }

  }











}

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
      totalSelectedTickets: [...this.sharedService.adult, ...this.sharedService.adultOffer, ...this.sharedService.child, ...this.sharedService.senior].length,
      child: [
        {
          title: 'Adult',
          price: '1202.54',
          profileImg: '../../../assets/parkTicketTickets/user.svg',
          selctedCount: this.sharedService.adult.length,
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
          selctedCount: this.sharedService.adultOffer.length,
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
          selctedCount: this.sharedService.child.length,
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
          selctedCount: this.sharedService.senior.length,
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
      totalSelectedTickets: [...this.sharedService.fastAdult, ...this.sharedService.fastChild].length,
      child: [
        {
          title: 'Fast Track Adult',
          price: '1924.06',
          profileImg: '../../../assets/parkTicketTickets/user.svg',
          selctedCount: this.sharedService.fastAdult.length,
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
          selctedCount: this.sharedService.fastChild.length,
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
          selctedCount: this.sharedService.collegeIdCombo.length,
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
          selctedCount: this.sharedService.collegeId.length,
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
          selctedCount: this.sharedService.birthday.length,
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
          selctedCount: this.sharedService.womenFree.length,
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
          selctedCount: this.sharedService.womenPaid.length,
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
  autoplayInterval: number = 3000;

  constructor(private router: Router, public sharedService: SharedService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sharedService.onActiveIndexChange(2, false);
    }, 0);
    this.calculateTotalAmount();
  }



  backToDate() {
    this.sharedService.onActiveIndexChange(1, false);
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



  // addTicket(i: number, j: number) {
  //   // console.log('>>>', i, j, typeof (this.ticketData[i]?.child[j]?.selctedCount) == 'number');
  //   if (typeof (this.ticketData[i]?.child[j]?.selctedCount) == 'number') {
  //     this.ticketData[i].child[j].selctedCount++;
  //   }
  //   if (typeof (this.ticketData[i]?.totalSelectedTickets) == 'number') {
  //     this.ticketData[i].totalSelectedTickets++;
  //   }
  //   if (Number(this.ticketData[i].child[j].price) == 0) {
  //     this.totalTicketAmount = (Number(this.totalTicketAmount) + Number(this.ticketData[i].child[j].oldPrice)).toFixed(2).toString();
  //   }
  //   else {
  //     this.totalTicketAmount = (Number(this.totalTicketAmount) + Number(this.ticketData[i].child[j].price)).toFixed(2).toString();
  //   }
  // }



  // removeTicket(i: number, j: number) {
  //   // console.log('>>>', i, j);
  //   if (this.ticketData[i]?.child[j]?.selctedCount) {
  //     this.ticketData[i].child[j].selctedCount--;
  //   }
  //   if (this.ticketData[i]?.totalSelectedTickets) {
  //     this.ticketData[i].totalSelectedTickets--;
  //   }
  //   if (Number(this.ticketData[i].child[j].price) == 0 && Number(this.totalTicketAmount) >= 0 && (Number(this.totalTicketAmount) - Number(this.ticketData[i].child[j].price)) >= 0) {
  //     this.totalTicketAmount = (Number(this.totalTicketAmount) - Number(this.ticketData[i].child[j].oldPrice)).toFixed(2).toString();
  //   }
  //   else if (Number(this.totalTicketAmount) >= 0 && (Number(this.totalTicketAmount) - Number(this.ticketData[i].child[j].price)) >= 0) {
  //     this.totalTicketAmount = (Number(this.totalTicketAmount) - Number(this.ticketData[i].child[j].price)).toFixed(2).toString();
  //   }
  // }



  //A maximum of 20 tickets are allowed for one transaction..!!
  addTicket(i: number, j: number) {
    // console.log('>>>>>', i, j);
    if (this.sharedService.parkTicketWrapper.length < 20) {
      if (!i) {
        if (!j) {
          this.sharedService.adult.push({ ...this.ticketData[i].child[j], parent: 'Regular' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.adult.length;
          // console.log(this.sharedService.adult);
        }
        if (j === 1) {
          this.sharedService.adultOffer.push({ ...this.ticketData[i].child[j], parent: 'Regular' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.adultOffer.length;
          // console.log(this.sharedService.adultOffer);
        }
        if (j === 2) {
          this.sharedService.child.push({ ...this.ticketData[i].child[j], parent: 'Regular' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.child.length;
          // console.log(this.sharedService.child);
        }
        if (j === 3) {
          this.sharedService.senior.push({ ...this.ticketData[i].child[j], parent: 'Regular' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.senior.length;
          // console.log(this.sharedService.senior);
        }
        this.ticketData[i].totalSelectedTickets = [...this.sharedService.adult, ...this.sharedService.adultOffer, ...this.sharedService.child, ...this.sharedService.senior].length;
      }

      else if (i === 1) {
        if (!j) {
          this.sharedService.fastAdult.push({ ...this.ticketData[i].child[j], parent: 'Fasttrack' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.fastAdult.length;
          console.log();
        }
        if (j) {
          this.sharedService.fastChild.push({ ...this.ticketData[i].child[j], parent: 'Fasttrack' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.fastChild.length;
          console.log();
        }
        this.ticketData[i].totalSelectedTickets = [...this.sharedService.fastAdult, ...this.sharedService.fastChild].length;
      }

      else if (i === 2) {
        if (!j) {
          this.sharedService.collegeIdCombo.push({ ...this.ticketData[i].child[j], parent: 'Offer' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.collegeIdCombo.length;
          console.log();
        }
        if (j === 1) {
          this.sharedService.collegeId.push({ ...this.ticketData[i].child[j], parent: 'Offer' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.collegeId.length;
          console.log();
        }
        if (j === 2) {
          this.sharedService.birthday.push({ ...this.ticketData[i].child[j], parent: 'Offer' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.birthday.length;
          console.log(this.sharedService.birthday);
        }
        if (j === 3) {
          this.sharedService.womenFree.push({ ...this.ticketData[i].child[j], parent: 'Offer' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.womenFree.length;
          console.log();
        }
        if (j === 4) {
          this.sharedService.womenPaid.push({ ...this.ticketData[i].child[j], parent: 'Offer' });
          this.ticketData[i].child[j].selctedCount = this.sharedService.womenPaid.length;
          console.log();
        }
        this.ticketData[i].totalSelectedTickets = [...this.sharedService.collegeIdCombo, ...this.sharedService.collegeId, ...this.sharedService.birthday, ...this.sharedService.womenFree, ...this.sharedService.womenPaid].length;
      }
      this.calculateTotalAmount();
    }
    else {
      this.sharedService.showTheDialog('A maximum of 20 tickets are allowed for one transaction..!!');
    }
  }


  removeTicket(i: number, j: number) {
    // console.log('>>>>>', i, j);
    if (!i) {
      if (!j) {
        this.sharedService.adult.length ? this.sharedService.adult.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.adult.length;
      }
      if (j === 1) {
        this.sharedService.adultOffer.length ? this.sharedService.adultOffer.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.adultOffer.length;
      }
      if (j === 2) {
        this.sharedService.child.length ? this.sharedService.child.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.child.length;
      }
      if (j === 3) {
        this.sharedService.senior.length ? this.sharedService.senior.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.senior.length;
      }
      this.ticketData[i].totalSelectedTickets = [...this.sharedService.adult, ...this.sharedService.adultOffer, ...this.sharedService.child, ...this.sharedService.senior].length;
    }

    else if (i === 1) {
      if (!j) {
        this.sharedService.fastAdult.length ? this.sharedService.fastAdult.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.fastAdult.length;
      }
      if (j) {
        this.sharedService.fastChild.length ? this.sharedService.fastChild.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.fastChild.length;
      }
      this.ticketData[i].totalSelectedTickets = [...this.sharedService.fastAdult, ...this.sharedService.fastChild].length;
    }

    else if (i === 2) {
      if (!j) {
        this.sharedService.collegeIdCombo.length ? this.sharedService.collegeIdCombo.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.collegeIdCombo.length;
      }
      if (j === 1) {
        this.sharedService.collegeId.length ? this.sharedService.collegeId.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.collegeId.length;
      }
      if (j === 2) {
        this.sharedService.birthday.length ? this.sharedService.birthday.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.birthday.length;
      }
      if (j === 3) {
        this.sharedService.womenFree.length ? this.sharedService.womenFree.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.womenFree.length;
      }
      if (j === 4) {
        this.sharedService.womenPaid.length ? this.sharedService.womenPaid.pop() : this.sharedService.showTheDialog('Quantity cannot be less than 0');
        this.ticketData[i].child[j].selctedCount = this.sharedService.womenPaid.length;
      }
      this.ticketData[i].totalSelectedTickets = [...this.sharedService.collegeIdCombo, ...this.sharedService.collegeId, ...this.sharedService.birthday, ...this.sharedService.womenFree, ...this.sharedService.womenPaid].length;
    }
    this.calculateTotalAmount();
  }


  calculateTotalAmount() {
    // this.sharedService.parkTicketWrapperArray = [...this.sharedService.adult, ...this.sharedService.adultOffer, ...this.sharedService.child, ...this.sharedService.senior, ...this.sharedService.fastAdult, ...this.sharedService.fastChild, ...this.sharedService.collegeIdCombo, ...this.sharedService.collegeId, ...this.sharedService.birthday, ...this.sharedService.womenFree, ...this.sharedService.womenPaid];
    // parkTicketWrapperArray = [...this.adult, ...this.adultOffer, ...this.child, ...this.senior, ...this.fastAdult, ...this.fastChild, ...this.collegeIdCombo, ...this.collegeId, ...this.birthday, ...this.womenFree, ...this.womenPaid];

    this.sharedService.parkTicketWrapper = [...this.sharedService.adult, ...this.sharedService.adultOffer, ...this.sharedService.child, ...this.sharedService.senior, ...this.sharedService.fastAdult, ...this.sharedService.fastChild, ...this.sharedService.collegeIdCombo, ...this.sharedService.collegeId, ...this.sharedService.birthday, ...this.sharedService.womenFree, ...this.sharedService.womenPaid];
    this.sharedService.parkTicketArrayOfArray = [this.sharedService.adult, this.sharedService.adultOffer, this.sharedService.child, this.sharedService.senior, this.sharedService.fastAdult, this.sharedService.fastChild, this.sharedService.collegeIdCombo, this.sharedService.collegeId, this.sharedService.birthday, this.sharedService.womenFree, this.sharedService.womenPaid];
    let total = 0;
    this.sharedService.parkTicketWrapper.forEach((obj: any) => {
      // console.log('>>>>>', obj.price);
      total += Number(obj.price);
    })

    // console.log('>>>>>total price', total, total.toFixed(2).toString(),);
    this.totalTicketAmount = total.toFixed(2).toString();
    // console.log('>>>>>parkTicketWrapperArray', this.sharedService.parkTicketWrapperArray);

  }


  onManualScroll() {
    // Temporarily stop the autoplay
    this.autoplayInterval = 0;

    // Restart autoplay after a delay
    setTimeout(() => {
      this.autoplayInterval = 3000; // Reset to original interval
    }, 3000); // Adjust this delay as needed
  }



  confirmClicked() {
    if (parseInt(this.totalTicketAmount) > 0) {
      this.sharedService.parkTicketDetails.ticketPrice = this.totalTicketAmount;
      this.sharedService.onActiveIndexChange(3, false);
    }
    else {
      this.sharedService.showTheDialog('Please add ticket/s to proceed!');
    }

  }











}

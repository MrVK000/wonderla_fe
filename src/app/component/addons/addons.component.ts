import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrl: './addons.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class AddonsComponent {

  totalFoodAmount: string = '0.00';

  foodData = [
    {
      title: 'Lunch | Snacks @ Rs.379',
      selected: 0,
      moreInfo: '',
      isStockAvailable: true,
      price: 379,
      foodImages: [
        {
          imgUrl: '../../../assets/parkTicketAddons/Lunch.jpg',
        },
        {
          imgUrl: '../../../assets/parkTicketAddons/Snacks.png',
        },
      ],
    },
    {
      title: 'Breakfast | Lunch | Snacks @ Rs.449',
      selected: 0,
      moreInfo: '',
      isStockAvailable: true,
      price: 449,
      foodImages: [
        {
          imgUrl: '../../../assets/parkTicketAddons/Breakfast.png',
        },
        {
          imgUrl: '../../../assets/parkTicketAddons/Meals.png',
        },
        {
          imgUrl: '../../../assets/parkTicketAddons/Samosa.png',
        },
      ],
    },
    {
      title: 'Lunch | Snacks | Dinner @ Rs.499',
      selected: 0,
      moreInfo: '',
      isStockAvailable: true,
      price: 499,
      foodImages: [
        {
          imgUrl: '../../../assets/parkTicketAddons/Lunch.jpg',
        },
        {
          imgUrl: '../../../assets/parkTicketAddons/Snacks.png',
        },
        {
          imgUrl: '../../../assets/parkTicketAddons/Dinner.png',
        },
      ],
    },
    {
      title: 'Breakfast | Lunch | Snacks | Dinner @ Rs.569',
      selected: 0,
      moreInfo: '',
      isStockAvailable: true,
      price: 569,
      foodImages: [
        {
          imgUrl: '../../../assets/parkTicketAddons/Breakfast.png',
        },
        {
          imgUrl: '../../../assets/parkTicketAddons/Meals.png',
        },
        {
          imgUrl: '../../../assets/parkTicketAddons/Samosa.png',
        },
        {
          imgUrl: '../../../assets/parkTicketAddons/Dinner.png',
        },
      ],
    },
    {
      title: 'College ID + Food Package @ Rs. 264',
      selected: 0,
      moreInfo: '',
      isStockAvailable: true,
      price: 264,
      foodImages: [
        {
          imgUrl: '../../../assets/parkTicketAddons/Lunch.jpg',
        },
      ],
    },
    {
      title: 'Ticket + Buffet Offer',
      selected: 0,
      moreInfo: '',
      isStockAvailable: false,
      price: 699,
      foodImages: [
        {
          imgUrl: '../../../assets/parkTicketAddons/Buffet.png',
        },
      ],
    },
  ];

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedService.onActiveIndexChange(3, false);
  }


  addTicket(i: number) {
    // console.log('>>>', i);
    this.foodData[i].selected++;
    this.totalFoodAmount = (Number(this.totalFoodAmount) + this.foodData[i].price).toString();
  }


  removeTicket(i: number) {
    // console.log('>>>', i);
    if (this.foodData[i].selected > 0) {
      this.foodData[i].selected--;
      this.totalFoodAmount = (Number(this.totalFoodAmount) - this.foodData[i].price) == 0 ? '0.00' : (Number(this.totalFoodAmount) - this.foodData[i].price).toString();
    }
  }

  backToTickets() {
    this.sharedService.onActiveIndexChange(2, false);
  }

  confirmClicked() {
    this.sharedService.onActiveIndexChange(4, false);
  }

}

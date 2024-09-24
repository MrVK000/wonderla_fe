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
      selected: this.sharedService.meal1.length,
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
      selected: this.sharedService.meal2.length,
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
      selected: this.sharedService.meal3.length,
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
      selected: this.sharedService.meal4.length,
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
      selected: this.sharedService.meal5.length,
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
      selected: this.sharedService.meal6.length,
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
    setTimeout(() => {
      this.sharedService.onActiveIndexChange(3, false);
    }, 0);
    this.calculateMealsAmount();
  }


  addTicket(i: number) {
    // console.log('>>>>>', i);
    if (!i) {
      this.sharedService.meal1.push(this.foodData[i]);
      this.foodData[i].selected = this.sharedService.meal1.length;
    }
    else if (i === 1) {
      this.sharedService.meal2.push(this.foodData[i]);
      this.foodData[i].selected = this.sharedService.meal2.length;
    }
    else if (i === 2) {
      this.sharedService.meal3.push(this.foodData[i]);
      this.foodData[i].selected = this.sharedService.meal3.length;
    }
    else if (i === 3) {
      this.sharedService.meal4.push(this.foodData[i]);
      this.foodData[i].selected = this.sharedService.meal4.length;
    }
    else if (i === 4) {
      this.sharedService.meal5.push(this.foodData[i]);
      this.foodData[i].selected = this.sharedService.meal5.length;
    }
    else if (i === 5) {
      this.sharedService.meal6.push(this.foodData[i]);
      this.foodData[i].selected = this.sharedService.meal6.length;
    }
    this.calculateMealsAmount();
  }

  //Combo Quantity cannot be less than 0
  removeTicket(i: number) {
    // console.log('>>>>>', i);
    if (!i) {
      this.sharedService.meal1.length ? this.sharedService.meal1.pop() : this.sharedService.showTheDialog('Combo Quantity cannot be less than 0');
      this.foodData[i].selected = this.sharedService.meal1.length;
    }
    else if (i === 1) {
      this.sharedService.meal2.length ? this.sharedService.meal2.pop() : this.sharedService.showTheDialog('Combo Quantity cannot be less than 0');
      this.foodData[i].selected = this.sharedService.meal2.length;
    }
    else if (i === 2) {
      this.sharedService.meal3.length ? this.sharedService.meal3.pop() : this.sharedService.showTheDialog('Combo Quantity cannot be less than 0');
      this.foodData[i].selected = this.sharedService.meal3.length;
    }
    else if (i === 3) {
      this.sharedService.meal4.length ? this.sharedService.meal4.pop() : this.sharedService.showTheDialog('Combo Quantity cannot be less than 0');
      this.foodData[i].selected = this.sharedService.meal4.length;
    }
    else if (i === 4) {
      this.sharedService.meal5.length ? this.sharedService.meal5.pop() : this.sharedService.showTheDialog('Combo Quantity cannot be less than 0');
      this.foodData[i].selected = this.sharedService.meal5.length;
    }
    else if (i === 5) {
      this.sharedService.meal6.length ? this.sharedService.meal6.pop() : this.sharedService.showTheDialog('Combo Quantity cannot be less than 0');
      this.foodData[i].selected = this.sharedService.meal6.length;
    }
    this.calculateMealsAmount()
  }


  calculateMealsAmount() {
    this.sharedService.mealsWrapper = [...this.sharedService.meal1, ...this.sharedService.meal2, ...this.sharedService.meal3, ...this.sharedService.meal4, ...this.sharedService.meal5, ...this.sharedService.meal6]
    let total = 0;
    this.sharedService.mealsWrapper.forEach((item: any) => {
      total += item.price;
    });
    this.totalFoodAmount = total.toFixed(2).toString();
    // console.log('>>>>>', this.totalFoodAmount);
  }








  // addTicket(i: number) {
  //   // console.log('>>>', i);
  //   this.foodData[i].selected++;
  //   this.totalFoodAmount = (Number(this.totalFoodAmount) + this.foodData[i].price).toString();
  // }


  // removeTicket(i: number) {
  //   // console.log('>>>', i);
  //   if (this.foodData[i].selected > 0) {
  //     this.foodData[i].selected--;
  //     this.totalFoodAmount = (Number(this.totalFoodAmount) - this.foodData[i].price) == 0 ? '0.00' : (Number(this.totalFoodAmount) - this.foodData[i].price).toString();
  //   }
  // }

  backToTickets() {
    this.sharedService.onActiveIndexChange(2, false);
  }

  confirmClicked() {
    this.sharedService.parkTicketDetails.mealsPrice = this.totalFoodAmount;
    this.sharedService.onActiveIndexChange(4, false);
  }

}

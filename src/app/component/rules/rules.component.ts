import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrl: './rules.component.scss'
})
export class RulesComponent {


  rulesData: any = [
    {
      title: 'Dress Code Of Fun',
      icon: '../../../assets/parkTicketRules/id-card-svgrepo-com.svg',
      isOpen: false,
      child: [
        {
          icon: '../../../assets/parkTicketRules/dress-code.svg',
          description: 'We’ve got some fantastic water park costumes available right here in the park. Starts at ₹ 350 only',
          type: 'normal',
        },
        {
          icon: '../../../assets/parkTicketRules/dress-code.svg',
          description: 'Only 100% Nylon or Synthetic costumes will be allowed on all water rides.',
          type: 'normal',
        },
        {
          title: 'Non Permitted Outfits',
          type: 'image',
          images: [
            {
              label: 'Sarees',
              img: '../../../assets/parkTicketRules/sarees.svg',
            },
            {
              label: 'Formal Pants',
              img: '../../../assets/parkTicketRules/formal-pants.svg',
            },
            {
              label: 'Formal Shirts',
              img: '../../../assets/parkTicketRules/formal-shirt.svg',
            },
            {
              label: 'Churidars / Salwars',
              img: '../../../assets/parkTicketRules/churidars-salwars.svg',
            },
          ],
        },
      ],
    },
    {
      title: 'Special Services',
      icon: '../../../assets/parkTicketRules/star-sharp-svgrepo-com.svg',
      isOpen: false,
      child: [
        {
          icon: '../../../assets/parkTicketRules/sr-citizens.svg',
          description: 'Wheelchairs & Pram are available for Sr. Citizens and Toddlers',
          type: 'normal',
        },
      ],
    },
    {
      title: 'Terms & Conditions',
      icon: '../../../assets/parkTicketRules/file-doc-svgrepo-com.svg',
      isOpen: false,
      child: [
        {
          description: 'To ensure the safety of the guests, height and weight restrictions are applicable for certain rides.',
          type: 'list',
        },
        {
          description: 'Entry is restricted to one person per ticket, which is valid only for a date and specified time.',
          type: 'list',
        },
        {
          description: 'Tickets are non-transferable.',
          type: 'list',
        },
        {
          description: 'Foods from outside and alcoholic drinks are not allowed inside park.',
          type: 'list',
        },
        {
          description: 'Intoxicated persons are not allowed to enter the park.',
          type: 'list',
        },
      ],
    },
    {
      title: 'Locker Information',
      icon: '../../../assets/parkTicketRules/safebox-bank-svgrepo-com.svg',
      isOpen: false,
      child: [
        {
          description: 'Locker facility are available at the park for secure storage of your belongings during your visit.',
          type: 'list',
        },
      ],
    },
  ];

  constructor(public sharedService: SharedService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedService.onActiveIndexChange(4, false);
  }


  ruleClicked(i: number) {
    // console.log('>>>', i);
    this.rulesData[i].isOpen = !this.rulesData[i].isOpen;
  }

  backToAddOns() {
    this.sharedService.onActiveIndexChange(3, false);
  }

  agreedClicked() {
    console.log('>>>',this.sharedService.parkTicketDetails);
    
    this.sharedService.onActiveIndexChange(5, false);
  }
}

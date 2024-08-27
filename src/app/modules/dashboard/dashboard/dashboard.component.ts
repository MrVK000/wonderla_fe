import { Subscription } from 'rxjs';
import { OverlayPanel } from 'primeng/overlaypanel';
import { DropdownChangeEvent } from 'primeng/dropdown';
import CONSTANT_VARIABLES from '../../../data/constants';
import { ApiService } from '../../../services/api.service';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { cardData, offersCardData, primaryNavbarOptions, sliderImageData, zigZagInterOneCardData, zigZagInterTwoCardData } from '../../../data/imgData';
import { AddressInterface, ContactLinksInterface, LabelInterface, MobileMenuInterface, PropertyInterface, SocialLinksInterface } from '../../../interfaces/dashboardInterface';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnDestroy, OnInit {

  @ViewChild('mobileMenuPanel') mobileMenuPanel!: OverlayPanel;
  @ViewChild('instructionOverlayPanel') instructionOverlayPanel!: OverlayPanel;
  @ViewChild('offersCardScrollContainer') offersCardScrollContainer!: ElementRef;
  @ViewChild('cardSectionScrollContainer') cardSectionScrollContainer!: ElementRef;
  @ViewChild('zigZagOneCardScrollContainer') zigZagOneCardScrollContainer!: ElementRef;
  @ViewChild('zigZagTwoCardScrollContainer') zigZagTwoCardScrollContainer!: ElementRef;

  CONSTANTS = CONSTANT_VARIABLES;

  cardData = cardData;
  offersCardData = offersCardData;
  sliderImageData = sliderImageData;
  primaryNavbarOptions = primaryNavbarOptions;
  zigZagInterTwoCardData = zigZagInterTwoCardData;
  zigZagInterOneCardData = zigZagInterOneCardData;

  endDate!: Date;
  startDate!: Date;
  todayDate: Date = new Date;
  tomorrowDate: Date = new Date(this.todayDate);

  subs!: Subscription;
  isLoading: boolean = true;
  isVisible: Boolean = false;
  liveChatDate: Date = new Date;
  liveChatTime: Date = new Date;
  showChatLater: boolean = false;
  parkData: LabelInterface[] = [];
  hotelData: LabelInterface[] = [];
  outingData: LabelInterface[] = [];
  liveChatLastTime: Date = new Date;
  selectedLocation!: LabelInterface;
  showLiveChatPanel: boolean = false;
  showChatBotDialog: boolean = false;
  showBookNowDialog: boolean = false;
  resortsData: LabelInterface[] = [];
  addresses: AddressInterface[] = [];
  selectedAdultOption!: LabelInterface;
  liveChatInputFieldValue: string = '';
  locationsData: LabelInterface[] = [];
  socialLinks: SocialLinksInterface[] = [];
  showBookingOptionDialog: boolean = false;
  contactLinks: ContactLinksInterface[] = [];
  selectedHotel: LabelInterface | null = null;
  customProperties: { [key: string]: string } = {};
  mobileViewDashboardOptions: MobileMenuInterface[] = [];
  liveChatConversationProperty: PropertyInterface[] = [];
  liveChatConversationRequestedProperty: PropertyInterface[] = [];

  adultOptionData: LabelInterface[] = [
    {
      label: '1',
      id: 0
    },
    {
      label: '2',
      id: 1
    },
    {
      label: '3',
      id: 2
    },
  ]

  mobileViewMenuItems: MenuItem[] = [
    {
      label: 'PARKS',
    },
    {
      label: 'HOME',
    },
    {
      label: 'WONDERLA BHUBANESWAR',
    },
    {
      label: 'RESORT',
    },
    {
      label: 'PARK TIMINGS AND TICKETS',
      items: [
        {
          label: 'WONDERLA KOCHI TIMINGS AND TICKETS'
        },
        {
          separator: true,
        },
        {
          label: 'WONDERLA BENGALURU TIMINGS AND TICKETS'
        },
        {
          separator: true,
        },
        {
          label: 'WONDERLA HYDRABAD TIMINGS AND TICKETS'
        },
        {
          separator: true,
        },
        {
          label: 'WONDERLA BHUBANESWAR TIMINGS AND TICKETS'
        },
      ]
    },
    {
      label: 'OFFERS',
      items: [
        {
          label: 'FUNTASTIC FOUR OFFER BUY 3, GET 1 FREE'
        },
        {
          separator: true,
        },
        {
          label: 'ONAM BUY 2 GET 1 OFFER - WONDERLA KOCHI'
        },
        {
          separator: true,
        },
        {
          label: 'BUY 1 GET 1 FREE AT WONDERLA BHUBANESWAR'
        },
        {
          separator: true,
        },
        {
          label: 'DEFENCE PASS - BUY 2 GET 2 FREE'
        },
        {
          separator: true,
        },
        {
          label: '25% OFF ON WEDNESDAYS AT WONDERLA RESORT'
        },
        {
          separator: true,
        },
        {
          label: 'MONSOON MADNESS - 20% OFF WONDERLA RESORT'
        },
        {
          separator: true,
        },
        {
          label: 'BUY 2 GET 2 TICKETS FREE FOR WOMEN AT WONDERLA PARKS'
        },
        {
          separator: true,
        },
        {
          label: 'COLLEGE OFFER - 20% OFF ON TICKETS'
        },
        {
          separator: true,
        },
        {
          label: 'BIRTHDAYS OFFER BUY 1 GET 1 FREE'
        },
        {
          separator: true,
        },
        {
          label: 'EARLY BIRD OFFER'
        },
        {
          separator: true,
        },
        {
          label: 'BRUNCH AT WONDERLA RESORT'
        },
        {
          separator: true,
        },
        {
          label: 'STAY & PLAY AT WONDERLA'
        },
        {
          separator: true,
        },
        {
          label: 'WONDERLA RESORT DAY PACKAGE'
        },
        {
          separator: true,
        },
        {
          label: '2 NIGHT STAY AND PLAY'
        },
        {
          separator: true,
        },
        {
          label: '3 NIGHTS 4 DAYS PACKAGE'
        },
        {
          separator: true,
        },
        {
          label: 'RESORT & PARK DAY PACKAGE'
        },
        {
          separator: true,
        },
        {
          label: '20% OFF ON YOUR ZOOMCAR TRIP'
        },
        {
          separator: true,
        },
        {
          label: '15% OFF FOR TSRTC TRAVELLERS'
        },
        {
          separator: true,
        },
        {
          label: '15% OFF FOR BMTC TRAVELLERS'
        },
        {
          separator: true,
        },
        {
          label: '15% OFF FOR MO BUS AND TRAIN TRAVELLERS'
        },
      ]
    },
    {
      label: 'QUICK LINKS',
      items: [
        {
          label: 'PLAN YOUR VISIT'
        },
        {
          separator: true,
        },
        {
          label: 'EVENTS'
        },
        {
          separator: true,
        },
        {
          label: 'DRESS CODE'
        },
        {
          separator: true,
        },
        {
          label: 'GETTING TO WONDERLA'
        },
        {
          separator: true,
        },
        {
          label: 'SPECIAL ACTIVITIES'
        },
      ]
    },
    {
      label: 'CONTACT US',
      items: [
        {
          label: 'INQUIRY FORM'
        },
        {
          separator: true,
        },
        {
          label: 'PARKS & RESORT CONTACT'
        },
        {
          separator: true,
        },
        {
          label: 'AUTHORISED BUSINESS DEWVELOPMENT PARTNERS'
        },
        {
          separator: true,
        },
        {
          label: 'GROUP PACKAGES'
        },
      ]
    },
    {
      label: 'FOOD AND BEVERAGES',
      items: [
        {
          label: 'RESTAURANTS'
        },
        {
          separator: true,
        },
        {
          label: 'ALL DAY MENU'
        },
      ]
    },
    {
      label: 'MERCHANDISE',
    },
    {
      label: "TOUR OPERATOR'S PORTAL",
    },
    {
      label: 'INVESTOR RELATIONS',
      items: [
        {
          label: 'BOARD OF DIRECTORS',
        },
        {
          separator: true,
        },
        {
          label: 'ANNUAL RETURN',
        },
        {
          separator: true,
        },
        {
          label: 'PROSPECTUS AND POLICIES',
        },
        {
          separator: true,
        },
        {
          label: 'QUARTERLY INVESTOR PRESENTATION',
        },
        {
          separator: true,
        },
        {
          label: 'ANNUALR REPORTS',
        },
        {
          separator: true,
        },
        {
          label: 'CORPORATE GOVERNMENT REPORT',
        },
        {
          separator: true,
        },
        {
          label: 'SHAREHOLDING PATTERN',
        },
        {
          separator: true,
        },
        {
          label: 'FINANCIAL RESULTS',
        },
        {
          separator: true,
        },
        {
          label: 'SHAREHOLDING INFORMATION',
        },
        {
          separator: true,
        },
        {
          label: 'E-VOTING RESULTS',
        },
        {
          separator: true,
        },
        {
          label: 'UNPAID DIVIDEND',
        },
        {
          separator: true,
        },
        {
          label: 'CONCALL',
        },
        {
          separator: true,
        },
        {
          label: 'NOTICES',
        },
        {
          separator: true,
        },
        {
          label: 'INVESTORS MEETINGS',
        },
        {
          separator: true,
        },
        {
          label: 'PRESS RELEASE',
        },
        {
          separator: true,
        },
        {
          label: 'UNCLAIMED IPO APPLICATION MONEY',
        },
        {
          separator: true,
        },
        {
          label: 'POSTAL BALLOT',
        },
        {
          separator: true,
        },
        {
          label: 'NOTICE TO PHYSICAL SHAREHOLDERS',
        },
        {
          separator: true,
        },
        {
          label: 'ADVERTISEMENT IN NEWSPAPERS',
        },
        {
          separator: true,
        },
        {
          label: 'RATING',
        },
        {
          separator: true,
        },
        {
          label: 'LEGAL COMPLIANCES',
        },
        {
          separator: true,
        },
        {
          label: 'NODAL OFFICER',
        },
        {
          separator: true,
        },
        {
          label: 'SECRETARIAL COMPLIANCE REPORT',
        },
        {
          separator: true,
        },
        {
          label: 'IEPF CLAIM PROCEDURE',
        },
        {
          separator: true,
        },
        {
          label: 'FAMILIARIZATION TO INDEPENDENT DIRECTORS',
        },
        {
          separator: true,
        },
        {
          label: 'COMMITTEES',
        },
        {
          separator: true,
        },
        {
          label: 'OUTCOME OF MEETINGS',
        },
        {
          separator: true,
        },
        {
          label: 'RELATED PARTY TRANSACTIONS',
        },
        {
          separator: true,
        },
        {
          label: 'UPDATES',
        },
        {
          separator: true,
        },
        {
          label: 'BUSINESS RESPONSIBILITY AND SUSTAINABLITY REPORT',
        },
      ]
    },
    {
      label: 'GREEN INITIATIVES',
      items: [
        {
          label: 'GREEN INITIATIVES',
        }
      ]
    },
    {
      label: 'CSR INITIATIVES',
      items: [
        {
          label: 'CSR INITIATIVES',
        }
      ]
    },
    {
      label: 'RULES AND REGULATIONS',
    },
    {
      label: 'CANCELLATION & RESCHEDULE',
    },
    {
      label: 'SAFETY AND HYGIENE',
    },
    {
      label: 'CAREERS',
      items: [
        {
          label: 'JOB OPENINGS AT BENGALURU RESORT'
        },
        {
          separator: true,
        },
        {
          label: 'JOB OPENINGS AT WONDERLA BENGALURU'
        },
        {
          separator: true,
        },
        {
          label: 'JOB OPENINGS AT WONDERLA KOCHI'
        },
        {
          separator: true,
        },
        {
          label: 'JOB OPENINGS AT WONDERLA HYDRABAD'
        },
        {
          separator: true,
        },
        {
          label: 'APPLY'
        },
      ]
    },
    {
      label: 'ABOUT US',
      items: [
        {
          label: 'ABOUT WONDERLAB'
        },
        {
          separator: true,
        },
        {
          label: 'ABOUT THE PROMOTERS'
        },
        {
          separator: true,
        },
        {
          label: 'AWARDS AND ACCOLADES'
        },
      ]
    },
    {
      label: 'WONDERLAB',
      items: [
        {
          label: 'WELCOME TO WONDERLAB'
        },
        {
          separator: true,
        },
        {
          label: 'ENROLMENT FORM'
        },
        {
          separator: true,
        },
        {
          label: 'SCIENCE DAY @ WONDERLAB'
        },
      ]
    },
    {
      label: 'OUR PEOPLE',
    },
    {
      label: 'SPECIAL ACTIVITIES',
      items: [
        {
          label: 'SATURNIGHT FEVER AT WONDERLA PARKS'
        },
        {
          separator: true,
        },
        {
          label: 'SATURNIGHT FEVER AT WONDERLA RESORT'
        },
        {
          separator: true,
        },
        {
          label: 'SATURNIGHT FEVER POOL PARTY'
        },
        {
          separator: true,
        },
        {
          label: 'SUNDAY BRUNCH LIVE'
        },
        {
          separator: true,
        },
        {
          label: 'HOLI BASH AT WONDERLA AMUSEMENT PARKS AND RESORT'
        },
        {
          separator: true,
        },
        {
          label: "VALENTINE'S DAY"
        },
        {
          separator: true,
        },
        {
          label: 'CHRISTMAS CELEBRATION'
        },
        {
          separator: true,
        },
        {
          label: 'ONAM'
        },
        {
          separator: true,
        },
        {
          label: 'DASARA'
        },
      ]
    },

  ];

  showMobileMenuPanel: boolean = false;


  constructor(public api: ApiService, private messageService: MessageService,) { }

  ngOnInit(): void {
    this.tomorrowDate.setDate(this.todayDate.getDate() + 1);
    // this.tomorrowDate = this.tomorrowDate.toDateString();


    this.generateCustomProperties();

    this.isLoading = true;
    this.subs = this.api.getMobileMenu().subscribe((res) => {
      this.mobileViewDashboardOptions = res.data;
      this.isLoading = false;
    },
      (error) => {
        this.isLoading = false;
        console.error(error);
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      });

    this.isLoading = true;
    this.subs = this.api.getLiveChatConversationProperty().subscribe((res) => {
      this.liveChatConversationProperty = res.data;
      this.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      });


    this.isLoading = true;
    this.subs = this.api.getOuting().subscribe((res) => {
      this.outingData = res.data;
      this.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      });


    this.isLoading = true;
    this.subs = this.api.getResort().subscribe((res) => {
      this.resortsData = res.data;
      this.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      });


    this.isLoading = true;
    this.subs = this.api.getPark().subscribe((res) => {
      this.parkData = res.data;
      this.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      });


    this.isLoading = true;
    this.subs = this.api.getLocations().subscribe((res) => {
      this.locationsData = res.data;
      this.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      });


    this.isLoading = true;
    this.subs = this.api.getContactLinks().subscribe((res) => {
      this.contactLinks = res.data;
      this.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      });


    this.isLoading = true;
    this.subs = this.api.getAddreses().subscribe((res) => {
      this.addresses = res.data;
      this.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      });


    this.isLoading = true;
    this.subs = this.api.getSocialLinks().subscribe((res) => {
      this.socialLinks = res.data;
      this.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      });


    const observer = new IntersectionObserver((entities) => {
      entities.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        else {
          entry.target.classList.remove('show')
        }
      })
    })
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }

  swapCard(type: string, name: string): void {
    if (name === 'zigZagOneCardScrollContainer') {
      const container = this.zigZagOneCardScrollContainer.nativeElement;
      container.scrollTo({
        left: type == 'right' ? container.scrollLeft - 200 : container.scrollLeft + 200,
        behavior: 'smooth'
      });
    }

    if (name === 'zigZagTwoCardScrollContainer') {
      const container = this.zigZagTwoCardScrollContainer.nativeElement;
      container.scrollTo({
        left: type == 'right' ? container.scrollLeft - 200 : container.scrollLeft + 200,
        behavior: 'smooth'
      });
    }

    if (name === 'cardSectionScrollContainer') {
      const container = this.cardSectionScrollContainer.nativeElement;
      container.scrollTo({
        left: type == 'right' ? container.scrollLeft - 200 : container.scrollLeft + 200,
        behavior: 'smooth'
      });
    }

    if (name === 'offersCardScrollContainer') {
      const container = this.offersCardScrollContainer.nativeElement;
      container.scrollTo({
        left: type == 'right' ? container.scrollLeft - 200 : container.scrollLeft + 200,
        behavior: 'smooth'
      });
    }
  }

  generateCustomProperties(): void {
    this.socialLinks.forEach((item: SocialLinksInterface, index: number) => {
      this.customProperties[`--item-${index}-color`] = item.background;
    });
  }

  showOverlayPanel(event: MouseEvent): void {
    this.instructionOverlayPanel.show(event);
  }

  hideOverlayPanel(): void {
    this.instructionOverlayPanel.hide();
  }

  @HostListener('window:scroll') onWindowScroll() {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.isVisible = yOffset > 300; // Show button after 300px scroll
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openLiveChatPanel() {
    this.showChatLater = false;
    this.showLiveChatPanel = true;
    this.liveChatDate = new Date;
    this.liveChatTime = new Date;
    this.liveChatConversationRequestedProperty = [];

    setTimeout(() => {
      this.showChatLater = true;
    }, 2000);

  }

  liveChatConversationInputs() {
    const trimmedValue = this.liveChatInputFieldValue.trim();
    if (trimmedValue.length) {
      const obj = {
        property: this.liveChatInputFieldValue,
        id: this.liveChatConversationRequestedProperty.length
      }
      this.liveChatConversationRequestedProperty.push(obj);
      this.liveChatInputFieldValue = '';
      this.liveChatLastTime = new Date;
    }
  }

  liveChatConversationRequests(item: PropertyInterface) {
    this.liveChatConversationRequestedProperty.push(item);
    this.liveChatLastTime = new Date;
  }

  liveChatConversationFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const filename = input.files?.[0]?.name;
    if (input.files?.[0] && filename) {
      const obj = {
        property: filename,
        id: this.liveChatConversationRequestedProperty.length
      };
      this.liveChatConversationRequestedProperty.push(obj);
      this.liveChatLastTime = new Date();
    }
  }

  goToLink(url: string) {
    window.open(url, "_blank");
    this.generateCustomProperties();
  }

  locationChanged(event: DropdownChangeEvent) {
    const locationId = event.value.id;
    if (locationId == 0) {
      this.hotelData = this.parkData;
    }
    else if (locationId == 1) {
      this.hotelData = this.resortsData;
      this.selectedAdultOption = this.adultOptionData[1];
      this.startDate = this.todayDate;
      this.endDate = this.tomorrowDate;
      // console.log('>>>this.startDate',this.startDate);

    }
    else if (locationId == 2) {
      this.hotelData = this.outingData;
    }
    this.selectedHotel = this.hotelData[0] as LabelInterface;
  }

  propertyChanged(event: DropdownChangeEvent) {
    console.log('>>>>property', event);

  }




  goToDashboard() { }
  goToExplore() { }
  goToReservation() { }

  mobileMenuOption(id: number, event: Event) {
    if (id === 1) {
      this.toggleAll();
      this.showMobileMenuPanel = !this.showMobileMenuPanel;
      // this.mobileMenuPanel.toggle(event);

    }
    else if (id === 2) {
      this.showBookingOptionDialog = true;
    }
    else if (id === 3) {
      window.location.href = 'tel:8281998877';
    }
  }






  toggleAll() {
    const expanded = this.areAllItemsExpanded();
    this.mobileViewMenuItems = this.toggleAllRecursive(this.mobileViewMenuItems, expanded);
  }

  private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
    return items.map((menuItem) => {
      menuItem.expanded = expanded;
      if (menuItem.items) {
        menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
      }
      return menuItem;
    });
  }

  private areAllItemsExpanded(): boolean {
    return this.mobileViewMenuItems.every((menuItem) => menuItem.expanded);
  }















  ngOnDestroy(): void {
    if (this.subs)
      this.subs.unsubscribe();
  }



}





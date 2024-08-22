import { Subscription } from 'rxjs';
import { OverlayPanel } from 'primeng/overlaypanel';
import { DropdownChangeEvent } from 'primeng/dropdown';
import CONSTANT_VARIABLES from '../../../data/constants';
import { ApiService } from '../../../services/api.service';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { cardData, offersCardData, primaryNavbarOptions, zigZagInterOneCardData, zigZagInterTwoCardData } from '../../../data/imgData';
import { AddressInterface, ContactLinksInterface, LabelInterface, MobileMenuInterface, PropertyInterface, SocialLinksInterface } from '../../../interfaces/dashboardInterface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnDestroy, OnInit {

  @ViewChild('zigZagOneCardScrollContainer') zigZagOneCardScrollContainer!: ElementRef;
  @ViewChild('zigZagTwoCardScrollContainer') zigZagTwoCardScrollContainer!: ElementRef;
  @ViewChild('cardSectionScrollContainer') cardSectionScrollContainer!: ElementRef;
  @ViewChild('offersCardScrollContainer') offersCardScrollContainer!: ElementRef;
  @ViewChild('instructionOverlayPanel') overlayPanel!: OverlayPanel;

  CONSTANTS = CONSTANT_VARIABLES;

  cardData = cardData;
  offersCardData = offersCardData;
  primaryNavbarOptions = primaryNavbarOptions;
  zigZagInterTwoCardData = zigZagInterTwoCardData;
  zigZagInterOneCardData = zigZagInterOneCardData;

  startDate!: Date;
  endDate!: Date;
  todayDate: Date = new Date;
  tomorrowDate: Date = new Date(this.todayDate);

  subs!: Subscription;
  isVisible: Boolean = false;
  isLoading: boolean = true;
  liveChatDate: Date = new Date;
  liveChatTime: Date = new Date;
  selectedHotel: LabelInterface | null = null;
  showChatLater: boolean = false;
  parkData: LabelInterface[] = [];
  hotelData: LabelInterface[] = [];
  outingData: LabelInterface[] = [];
  liveChatLastTime: Date = new Date;
  selectedLocation!: LabelInterface;
  showLiveChatPanel: boolean = false;
  showChatBotDialog: boolean = false;
  resortsData: LabelInterface[] = [];
  addresses: AddressInterface[] = [];
  selectedAdultOption!: LabelInterface;
  liveChatInputFieldValue: string = '';
  locationsData: LabelInterface[] = [];
  socialLinks: SocialLinksInterface[] = [];
  showBookingOptionDialog: boolean = false;
  contactLinks: ContactLinksInterface[] = [];
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
    this.overlayPanel.show(event);
  }

  hideOverlayPanel(): void {
    this.overlayPanel.hide();
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
      this.startDate=this.todayDate;
      this.endDate=this.tomorrowDate;
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





  ngOnDestroy(): void {
    if (this.subs)
      this.subs.unsubscribe();
  }



}





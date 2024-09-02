import { Subscription } from 'rxjs';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Dropdown, DropdownChangeEvent } from 'primeng/dropdown';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { cardData, offersCardData, sliderImageData, zigZagInterTwoCardData, zigZagInterOneCardData } from '../../data/imgData';
import { LabelInterface, AddressInterface, SocialLinksInterface, ContactLinksInterface, MobileMenuInterface, PropertyInterface } from '../../interfaces/dashboardInterface';
import { ApiService } from '../../services/api.service';
import CONSTANT_VARIABLES from '../../data/constants';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnDestroy, OnInit {

  @ViewChild('locationDropdown') locationDropdown!: Dropdown;
  @ViewChild('mobileMenuPanel') mobileMenuPanel!: OverlayPanel;
  @ViewChild('instructionOverlayPanel') instructionOverlayPanel!: OverlayPanel;
  @ViewChild('offersCardScrollContainer') offersCardScrollContainer!: ElementRef;
  @ViewChild('cardSectionScrollContainer') cardSectionScrollContainer!: ElementRef;
  @ViewChild('zigZagOneCardScrollContainer') zigZagOneCardScrollContainer!: ElementRef;
  @ViewChild('zigZagTwoCardScrollContainer') zigZagTwoCardScrollContainer!: ElementRef;





  subs!: Subscription;
  isVisible: Boolean = false;
  liveChatDate: Date = new Date;
  liveChatTime: Date = new Date;
  showChatLater: boolean = false;

  liveChatLastTime: Date = new Date;

  showLiveChatPanel: boolean = false;
  showChatBotDialog: boolean = false;

  addresses: AddressInterface[] = [];

  liveChatInputFieldValue: string = '';

  socialLinks: SocialLinksInterface[] = [];
  showBookingOptionDialog: boolean = false;
  contactLinks: ContactLinksInterface[] = [];

  customProperties: { [key: string]: string } = {};
  mobileViewDashboardOptions: MobileMenuInterface[] = [];
  liveChatConversationProperty: PropertyInterface[] = [];
  liveChatConversationRequestedProperty: PropertyInterface[] = [];



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


  constructor(public api: ApiService, private messageService: MessageService, public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.tomorrowDate.setDate(this.sharedService.todayDate.getDate() + 1);

    this.generateCustomProperties();


    this.sharedService.isLoading = true;
    this.subs = this.api.getMobileMenu().subscribe((res) => {
      this.mobileViewDashboardOptions = res.data;
      this.sharedService.isLoading = false;
    },
      (error) => {
        this.sharedService.isLoading = false;
        console.error(error);
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
      });

    this.sharedService.isLoading = true;
    this.subs = this.api.getLiveChatConversationProperty().subscribe((res) => {
      this.liveChatConversationProperty = res.data;
      this.sharedService.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.sharedService.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
      });


    this.sharedService.isLoading = true;
    this.subs = this.api.getOuting().subscribe((res) => {
      this.sharedService.outingData = res.data;
      this.sharedService.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.sharedService.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
      });


    this.sharedService.isLoading = true;
    this.subs = this.api.getResort().subscribe((res) => {
      this.sharedService.resortsData = res.data;
      this.sharedService.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.sharedService.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
      });


    this.sharedService.isLoading = true;
    this.subs = this.api.getPark().subscribe((res) => {
      this.sharedService.parkData = res.data;
      this.sharedService.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.sharedService.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
      });


    this.sharedService.isLoading = true;
    this.subs = this.api.getLocations().subscribe((res) => {
      this.sharedService.locationsData = res.data;
      console.log('>>>>location', this.sharedService.locationsData);

      this.sharedService.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.sharedService.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
      });


    this.sharedService.isLoading = true;
    this.subs = this.api.getContactLinks().subscribe((res) => {
      this.contactLinks = res.data;
      this.sharedService.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.sharedService.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
      });


    this.sharedService.isLoading = true;
    this.subs = this.api.getAddreses().subscribe((res) => {
      this.addresses = res.data;
      this.sharedService.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.sharedService.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
      });


    this.sharedService.isLoading = true;
    this.subs = this.api.getSocialLinks().subscribe((res) => {
      this.socialLinks = res.data;
      this.sharedService.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.sharedService.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
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

  showOverlayPanel(event: MouseEvent): void {
    this.instructionOverlayPanel.show(event);
  }

  hideOverlayPanel(): void {
    this.instructionOverlayPanel.hide();
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


  focusOnLocationDropdown() {
    this.locationDropdown.focus(); // Focuses the dropdown
    this.locationDropdown.show();
  }



  goToBookTicket() { }








  ngOnDestroy(): void {
    if (this.subs)
      this.subs.unsubscribe();
  }



}

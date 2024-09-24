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



  mobileViewMenuItems: MenuItem[] = [];

  showMobileMenuPanel: boolean = false;


  constructor(public api: ApiService, private messageService: MessageService, public sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.tomorrowDate.setDate(this.sharedService.todayDate.getDate() + 1);

    this.generateCustomProperties();


    this.sharedService.isLoading = true;
    this.subs = this.api.getMobileMenu().subscribe((res) => {
      this.mobileViewDashboardOptions = res;
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
      this.liveChatConversationProperty = res;
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
      this.sharedService.outingData = res;
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
      this.sharedService.resortsData = res;
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
      this.sharedService.parkData = res;
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
      this.sharedService.locationsData = res;
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
      this.contactLinks = res;
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
      this.addresses = res;
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
      this.socialLinks = res;
      this.sharedService.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.sharedService.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
      });


    this.sharedService.isLoading = true;
    this.subs = this.api.getAdult().subscribe((res) => {
      this.sharedService.adultOptionData = res;
      this.sharedService.isLoading = false;
    },
      (error) => {
        console.error(error);
        this.sharedService.isLoading = false;
        this.messageService?.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
        this.sharedService.clearToast();
      });


    this.sharedService.isLoading = true;
    this.subs = this.api.getMobileMenuOption().subscribe((res) => {
      this.mobileViewMenuItems = res;
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

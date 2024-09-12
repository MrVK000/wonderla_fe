import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { StepsModule } from 'primeng/steps';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    BrowserAnimationsModule,

    //primeng packages
    MenuModule,
    StepsModule,
    ToastModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    MenubarModule,
    SidebarModule,
    CalendarModule,
    CarouselModule,
    DropdownModule,
    InputTextModule,
    PanelMenuModule,
    InputGroupModule,
    ProgressBarModule,
    OverlayPanelModule,
    InputGroupAddonModule,
    ProgressSpinnerModule,

  ],


  exports: [

    BrowserAnimationsModule,

    //primeng packages
    MenuModule,
    StepsModule,
    ToastModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    MenubarModule,
    SidebarModule,
    CalendarModule,
    CarouselModule,
    DropdownModule,
    InputTextModule,
    PanelMenuModule,
    InputGroupModule,
    ProgressBarModule,
    OverlayPanelModule,
    InputGroupAddonModule,
    ProgressSpinnerModule,

  ],
  providers: [MessageService],

})
export class SharedModule { }

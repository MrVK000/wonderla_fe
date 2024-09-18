import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePipe } from '@angular/common';


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
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { InputGroupModule } from 'primeng/inputgroup';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressBarModule } from 'primeng/progressbar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    PanelMenuModule,
    InputGroupModule,
    FloatLabelModule,
    InputNumberModule,
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
    CheckboxModule,
    DropdownModule,
    InputTextModule,
    PanelMenuModule,
    InputGroupModule,
    FloatLabelModule,
    InputNumberModule,
    ProgressBarModule,
    OverlayPanelModule,
    InputGroupAddonModule,
    ProgressSpinnerModule,

  ],
  providers: [MessageService, DatePipe],

})
export class SharedModule { }

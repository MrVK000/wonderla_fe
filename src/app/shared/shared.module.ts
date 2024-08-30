import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';



import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelMenuModule } from 'primeng/panelmenu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    BrowserAnimationsModule,

    //primeng packages
    MenuModule,
    ToastModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    MenubarModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    PanelMenuModule,
    OverlayPanelModule,
    ProgressSpinnerModule,

  ],


  exports: [

    BrowserAnimationsModule,

    //primeng packages
    MenuModule,
    ToastModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    MenubarModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    PanelMenuModule,
    OverlayPanelModule,
    ProgressSpinnerModule,

  ],
  providers: [MessageService],

})
export class SharedModule { }

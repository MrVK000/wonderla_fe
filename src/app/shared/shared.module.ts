import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,

    //primeng packages
    ToastModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    MenubarModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    OverlayPanelModule,
    ProgressSpinnerModule,

  ],


  exports: [

    //primeng packages
    ToastModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    MenubarModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    OverlayPanelModule,
    ProgressSpinnerModule,

  ],
  providers: [MessageService]

})
export class SharedModule { }

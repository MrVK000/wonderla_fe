import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [],

  imports: [
    CommonModule,

    //primeng packages
    FormsModule,
    ButtonModule,
    DialogModule,
    MenubarModule,
    DropdownModule,
    InputTextModule,
    OverlayPanelModule,
    ProgressSpinnerModule,

  ],


  exports: [

    //primeng packages
    FormsModule,
    ButtonModule,
    DialogModule,
    MenubarModule,
    DropdownModule,
    InputTextModule,
    OverlayPanelModule,
    ProgressSpinnerModule,

  ]

})
export class SharedModule { }

import { Component, HostListener, ViewChild } from '@angular/core';
import CONSTANT_VARIABLES from '../../data/constants';
import { primaryNavbarOptions } from '../../data/imgData';
import { SharedService } from '../../shared/shared.service';
import { DropdownChangeEvent } from 'primeng/dropdown';
import { LabelInterface } from '../../interfaces/dashboardInterface';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('instructionOverlayPanel') instructionOverlayPanel!: OverlayPanel;

  CONSTANTS = CONSTANT_VARIABLES;
  primaryNavbarOptions: any = primaryNavbarOptions;

  constructor(public sharedService: SharedService, public router: Router,) { }


  @HostListener('window:scroll', ['$event']) onWindowScroll(event: Event) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 30) {
      // Apply styling changes when scroll position is greater than 100
      // e.g., add a class to an element
      document.getElementById('navbar')?.classList.add('scrolled');
      document.getElementById('contentWrappen')?.classList.add('extraMargin');
      document.getElementById('adbar')?.classList.add('removeElement');
      document.getElementById('primaryNavbarMenu')?.classList.add('removeMargin');
    } else {
      // Remove the class when scrolling up
      document.getElementById('navbar')?.classList.remove('scrolled');
      document.getElementById('contentWrappen')?.classList.remove('extraMargin');
      document.getElementById('adbar')?.classList.remove('removeElement');
      document.getElementById('primaryNavbarMenu')?.classList.remove('removeMargin');
    }
  }


  navOptionHovered(type: boolean, i: number) {
    if (type && this.primaryNavbarOptions[i].isHovered != undefined) {
      this.primaryNavbarOptions[i].isHovered = true;
    }
    else if (this.primaryNavbarOptions[i].isHovered) {
      this.primaryNavbarOptions[i].isHovered = false;
    }
  }




  goToDashboard() { }






  showOverlayPanel(event: MouseEvent): void {
    this.instructionOverlayPanel.show(event);
  }

  hideOverlayPanel(): void {
    this.instructionOverlayPanel.hide();
  }








}

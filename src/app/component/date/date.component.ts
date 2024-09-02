import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent {


  currentDate: Date = new Date();
  days: Date[] = [];





  constructor(private router: Router, public sharedService: SharedService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sharedService.onActiveIndexChange(1, false);
    this.generateCalendar();

  }


  generateCalendar() {
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    this.days = this.sharedService.generateCalendar(month, year);
    console.log('>>>>>days', this.days);

  }









}

import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import moment from 'moment';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent {


  currentDate: Date = new Date();
  days: Date[] = [];
  calendarInfo = [
    {
      label: 'Available',
      color: '#53e79d'
    },
    {
      label: 'Fast Filling',
      color: '#ffc36d'
    },
    {
      label: 'Sold Out',
      color: '#fe7676'
    },
    {
      label: 'Closed',
      color: '#cdcdcd'
    },
  ]


  selectedDate!: Date;


  constructor(private router: Router, public sharedService: SharedService,) { }

  ngOnInit(): void {

    this.sharedService.onActiveIndexChange(1, false);




    // this.currentMonth = moment(); // Current month
    // this.generateCalendar(this.currentMonth);





    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    this.days = this.generateCalendar(month, year);





  }


  // generateCalendar() {
  //   const month = this.currentDate.getMonth();
  //   const year = this.currentDate.getFullYear();
  //   this.days = this.sharedService.generateCalendar(month, year);
  //   console.log('>>>>>days', this.days);
  // }














  generateCalendar(month: number, year: number): Date[] {
    const dates: Date[] = [];

    // First day of the month
    const firstDay = new Date(year, month, 1);
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0);

    // Days from the previous month to fill the first week
    const startDay = firstDay.getDay();
    for (let i = startDay; i > 0; i--) {
      const prevDate = new Date(year, month, 1 - i);
      dates.push(prevDate);
    }

    // Days of the current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      dates.push(new Date(year, month, i));
    }

    // Days from the next month to fill the last week
    const endDay = lastDay.getDay();
    for (let i = 1; i < 7 - endDay; i++) {
      const nextDate = new Date(year, month + 1, i);
      dates.push(nextDate);
    }

    return dates;
  }




  previousMonth(): void {
    // this.currentMonth = this.currentMonth.subtract(1, 'month');
    const newDate = new Date(this.currentDate);
    newDate.setMonth(this.currentDate.getMonth() - 1);
    this.currentDate = newDate;
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    this.days = this.generateCalendar(month, year);
  }

  nextMonth(): void {
    // this.currentMonth = this.currentMonth.add(1, 'month');
    const newDate = new Date(this.currentDate);
    newDate.setMonth(this.currentDate.getMonth() + 1);
    this.currentDate = newDate;
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    this.days = this.generateCalendar(month, year);
  }



  get getCurrentDate() {
    console.log('>>>>', this.currentDate);

    return this.currentDate;
  }



  // currentMonth!: moment.Moment;
  // daysInMonth: moment.Moment[] = [];
  weekDays: string[] = moment.weekdaysShort();




  // generateCalendar(month: moment.Moment): void {
  //   this.daysInMonth = []; // Clear the array

  //   const startOfMonth = month.clone().startOf('month');
  //   const endOfMonth = month.clone().endOf('month');

  //   // Add the days of the month to the daysInMonth array
  //   for (let i = startOfMonth.date(); i <= endOfMonth.date(); i++) {
  //     this.daysInMonth.push(moment(startOfMonth).date(i));
  //   }
  // }

  // previousMonth(): void {
  //   this.currentMonth = this.currentMonth.subtract(1, 'month');
  //   this.generateCalendar(this.currentMonth);
  // }

  // nextMonth(): void {
  //   this.currentMonth = this.currentMonth.add(1, 'month');
  //   this.generateCalendar(this.currentMonth);
  // }




  confirmDate() {
    if (this.selectedDate) {
      this.sharedService.onActiveIndexChange(2, false);
    }
    else {
      this.showPopup = true;
    }
  }


  showColorForThisMonth() {
    const firstMonth = new Date();
    const secondMonth = new Date();
    firstMonth.setMonth(new Date().getMonth() + 1);
    secondMonth.setMonth(new Date().getMonth() + 2);
    return new Date().getMonth() == this.currentDate.getMonth() || firstMonth.getMonth() == this.currentDate.getMonth() || secondMonth.getMonth() == this.currentDate.getMonth();
  }


  dateSelected(day: Date) {
    if (day.getMonth() === this.currentDate.getMonth())
      this.selectedDate = day;
  }


  showPopup: boolean = false;


  backToLocation() {
    this.sharedService.onActiveIndexChange(0, false)
  }



}

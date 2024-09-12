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
  minDate!: Date;
  maxDate!: Date;
  showPopup: boolean = false;
  weekDays: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  constructor(private router: Router, public sharedService: SharedService,) { }

  ngOnInit(): void {
    this.sharedService.onActiveIndexChange(1, false);

    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    this.days = this.generateCalendar(month, year);

    const today = new Date();
    this.minDate = today;
    const max = new Date(today);
    max.setMonth(today.getMonth() + 2);
    this.maxDate = max;

  }


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
    const newDate = new Date(this.currentDate);
    newDate.setMonth(this.currentDate.getMonth() - 1);
    this.currentDate = newDate;
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    this.days = this.generateCalendar(month, year);
  }

  nextMonth(): void {
    const newDate = new Date(this.currentDate);
    newDate.setMonth(this.currentDate.getMonth() + 1);
    this.currentDate = newDate;
    const month = this.currentDate.getMonth();
    const year = this.currentDate.getFullYear();
    this.days = this.generateCalendar(month, year);
  }

  confirmDate() {
    if (this.selectedDate) {
      this.sharedService.parkTicketDetails.date = this.selectedDate.toString();
      this.sharedService.onActiveIndexChange(2, false);
    }
    else {
      this.showPopup = true;
    }
  }


  showColorForThisMonth(day: any) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const givenDate = new Date(day);
    givenDate.setHours(0, 0, 0, 0);

    const firstMonth = new Date();
    const secondMonth = new Date();
    firstMonth.setMonth(new Date().getMonth() + 1);
    secondMonth.setMonth(new Date().getMonth() + 2);
    return (new Date().getMonth() == this.currentDate.getMonth() || firstMonth.getMonth() == this.currentDate.getMonth() || secondMonth.getMonth() == this.currentDate.getMonth()) && givenDate > today;
  }


  dateSelected(day: Date) {
    if (day.getMonth() === this.currentDate.getMonth())
      this.selectedDate = day;
  }

  backToLocation() {
    this.sharedService.onActiveIndexChange(0, false)
  }

}

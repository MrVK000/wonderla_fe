import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parkDate'
})
export class ParkDatePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }
  transform(value: string, ...args: unknown[]): unknown {
    const date = new Date(value);
    return this.datePipe.transform(date, 'dd MMMM yyyy');
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datetoage'
})
export class DatetoagePipe implements PipeTransform {
  transform(value: Date, ...args: unknown[]): unknown {
    return Math.abs(value.getUTCFullYear() - 1994);
  }
}

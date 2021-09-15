import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {
    const dateMilliseconds = this.formatStringDate(value);
    const diffMilliseconds = Date.now() - dateMilliseconds;

    return Math.abs(new Date(diffMilliseconds).getUTCFullYear() - 1970);
  }

  private formatStringDate(stringDate: string): number {
    const [year, month, day] = stringDate.split('-');
    return Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day));
  }

}

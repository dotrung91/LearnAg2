import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sttPipe'
})
export class SttPipePipe implements PipeTransform {

  transform(value: number): any {
    let subNumber = '';

    if (!value || value <= 0) {
      return null;
    } else if (value === 1) {
      subNumber = 'st';
    } else if (value === 2) {
      subNumber = 'nd';
    } else if (value >= 3) {
      subNumber = 'th';
    }
    return  value + subNumber;

  }

}

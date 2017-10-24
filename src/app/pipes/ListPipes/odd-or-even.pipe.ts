import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddOrEven'
})
export class OddOrEvenPipe implements PipeTransform {

  transform(arrInput: any[], args?: any): any {
    return arrInput.filter(function(value) {
      if (args === true) {
        return value % 2 === 0;
      } else {
        return value % 2 !== 0;
      }
    });
  }

}

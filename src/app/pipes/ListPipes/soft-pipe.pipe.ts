import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'softPipe'
})
export class SoftPipePipe implements PipeTransform {

  transform(arrSort: string[], args?: string): any {
    let sorted = arrSort.slice();
    sorted  =  sorted.sort();
    if (args === 'DESC') {
      sorted = sorted.reverse();
    }
    return sorted;
  }
}

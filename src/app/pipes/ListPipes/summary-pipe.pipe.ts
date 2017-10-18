import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summaryPipe'
})
export class SummaryPipePipe implements PipeTransform {

  transform(value: string, args?: number): any {
    if (value) {
      return value.substring(0, args) + '...';
    }
  }

}

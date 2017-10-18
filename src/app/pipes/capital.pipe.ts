import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/\w\S*/g, (txt) => {
      return  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

}

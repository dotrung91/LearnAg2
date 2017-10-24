import { Pipe, PipeTransform } from '@angular/core';
import { HeroObj } from '../../list-hero/heroObj';
@Pipe({
  name: 'checkfly',
  pure: false
})
export class CheckflyPipe implements PipeTransform {

  transform(listHero: HeroObj[], args?: boolean): any {
    if (listHero && args === true) {
      return listHero.filter(hero => hero.fly === true);
    } else if (args === false) {
      return listHero.filter(hero => hero.fly === false);
    }
  }

}

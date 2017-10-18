import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {
  transform(categories: string[], args?: any): any {
  const categorySort: string[] = [];

  if (categories) {
    categories.forEach(category => {
      if (categorySort.indexOf(category) <= -1) {
        categorySort.push(category);
      }
    });
  }
    return categorySort;
  }

}

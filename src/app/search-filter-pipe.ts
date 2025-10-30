import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): any {
    console.log("transforming...");
    filterText = filterText?.toLowerCase() || '';

    return list 
      ? list.filter(item =>
          item.nomCours?.toLowerCase().includes(filterText)
        )
      : [];
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tweetlist: any[], searchText: string): any[]{
    if (!tweetlist) {
      return [];
    }
    if (!searchText) {
      return tweetlist;
    }
    searchText = searchText.toLocaleLowerCase();

    return tweetlist.filter(list=>list.firstName.toLowerCase().indexOf(searchText.toLowerCase()) != -1);
  }
  }



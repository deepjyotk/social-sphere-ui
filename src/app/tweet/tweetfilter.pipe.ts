import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tweetfilter'
})
export class TweetfilterPipe implements PipeTransform {

  transform(tweetList: any[], searchText: string): any[]{
    if (!tweetList) {
      return [];
    }
    if (!searchText) {
      return tweetList;
    }
    searchText = searchText.toLocaleLowerCase();

    return tweetList.filter(list=>list.firstName.toLowerCase().indexOf(searchText.toLowerCase()) != -1);
  }

}

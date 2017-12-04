/*import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import 'moment/min/locales';
import { IArticle } from '../interfaces/article.interface';

moment.locale('de-de');

@Pipe({
  name: 'articleMatchplanFilter'
})
export class ArticleMatchplanFilterPipe implements PipeTransform {

  transform(articles: IArticle[], args?: any): any {

    if (!articles) {
      return;
    }

    if (!args) {
      return articles;
    }

    const today: any = moment().format();

    switch (args) {
      case '<':
        return articles.filter(article => article.matchData.matchEndDate < today);
      case '>':
        return articles.filter(article => article.matchData.matchStartDate > today);
    }

    return articles;
  }

}*/

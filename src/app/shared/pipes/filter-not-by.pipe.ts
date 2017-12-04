/*import { Pipe, PipeTransform } from '@angular/core';
 import {
  extractDeepPropertyByMapKey, isBoolean, isNumberFinite, isString,
  isUndefined
} from 'ngx-pipes/src/pipes/helpers/helpers';

@Pipe({
  name: 'filterNotBy',
  pure: false
})

export class NotByFilterPipe implements PipeTransform {

  transform(input: any, props: Array<string>, search: any, strict: boolean = false): any[] {
    console.log('notByFilter not working');
    // ToDo notByFilter
    return input;
    /* if (!Array.isArray(input) || (!isString(search) && !isNumberFinite(search) && !isBoolean(search))) {
      return input;
    }

    const term = String(search).toLowerCase();

    return input.filter((obj) => {
      return props.some((prop) => {
        const value = extractDeepPropertyByMapKey(obj, prop),
          strValue: string = String(value).toLowerCase();

        if (isUndefined(value)) {
          return false;
        }

        return strict
          ? term === strValue
          /* tslint:disable *
          : !~strValue.indexOf(term);
      });
    });

  }

}*/

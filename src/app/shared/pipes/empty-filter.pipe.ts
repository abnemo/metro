/*import { Pipe, PipeTransform } from '@angular/core';
import { extractDeepPropertyByMapKey } from 'ngx-pipes/src/pipes/helpers/helpers';

@Pipe({
  name: 'emptyFilter'
})
export class EmptyFilterPipe implements PipeTransform {

  constructor() {
  }

  transform(input: any[], props: string[]): any[] {

    if (!Array.isArray(input) || !Array.isArray(props)) {
      return input;
    }

    return input.filter((obj) => {

      const isEmpty: boolean = true;

      console.log(obj);
      /* for (let i = 0; i < props.length; i++) {
        const value = extractDeepPropertyByMapKey(obj, props[i]);
        if (value !== '') {
          isEmpty = false;
        }
      }//

      if (isEmpty) {
        return input;
      }
    });

  }
}*/

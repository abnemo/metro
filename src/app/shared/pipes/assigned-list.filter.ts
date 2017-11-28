/*import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assignedListFilter'
})

export class AssignedListFilterPipe implements PipeTransform {

  transform(objectList: any[], assignedObjectList: any[], getAlreadyAssignedValues: boolean): any[] {

    if (!Array.isArray(objectList)) {
      return objectList;
    }

    const returnList = [];

    if (!getAlreadyAssignedValues) {
      objectList.forEach(object => {
        if (!assignedObjectList || assignedObjectList.indexOf(object.id) === -1) {
          returnList.push(object);
        }
      });
    } else {
      objectList.forEach(object => {
        if (assignedObjectList && assignedObjectList.indexOf(object.id) > -1) {
          returnList.push(object);
        }
      });
    }
    return returnList;
  }

} */

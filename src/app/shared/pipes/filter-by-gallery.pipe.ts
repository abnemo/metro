import { Pipe, PipeTransform } from '@angular/core';
import { IMediaItem } from '../interfaces/media-item.interface';
import { IMediaGallery } from '../interfaces/media-gallery.interface';

@Pipe({
  name: 'filterByGallery'
})

export class FilterByGalleryPipe implements PipeTransform {

  transform(input: IMediaItem[], mediaGallery: IMediaGallery): any[] {

    if (!Array.isArray(input)) {
      return input;
    }

    return input.filter((mediaItem) => {

      if (!mediaGallery) {
        return mediaItem;
      } else {
        if (mediaItem.assignedItemGallery === mediaGallery.id) {
          return mediaItem;
        }
      }
    });
  }

}

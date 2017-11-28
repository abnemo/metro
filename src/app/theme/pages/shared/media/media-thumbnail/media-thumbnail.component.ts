import {
  Component,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { MediaItemService } from '../../../../../shared/services/media/media-item.service';
import { IMediaItem } from '../../../../../shared/interfaces/media-item.interface';
import { ISubscription } from 'rxjs/Subscription';


@Component({
  selector: 'media-thumbnail',
  templateUrl: 'media-thumbnail.component.html',
})
export class MediaThumbnailComponent implements OnInit, OnDestroy {

  @Input() mediaItemKey: string;

  public mediaItem: IMediaItem;
  private mediaSubscription: ISubscription;

  constructor(private mediaItemService: MediaItemService) {
  }

  ngOnInit() {
    this.mediaSubscription = this.mediaItemService.getMediaItemById(this.mediaItemKey).subscribe(
      (item: IMediaItem) => this.mediaItem = item
    );
  }

  ngOnDestroy() {
    this.mediaSubscription.unsubscribe();
  }

}

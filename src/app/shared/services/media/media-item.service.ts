import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IMediaItem } from '../../interfaces/media-item.interface';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction
} from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Injectable()
export class MediaItemService {

  collectionRef: AngularFirestoreCollection<IMediaItem>;
  items$: Observable<IMediaItem[]>;

  private path = `media-items`;

  constructor(private afs: AngularFirestore) {
    this.collectionRef = this.afs.collection(this.path);
    this.items$ = this.collectionRef.snapshotChanges()
      .map((mediaItems: DocumentChangeAction[]) => {
        return mediaItems.map((doc: DocumentChangeAction) => {
          const mediaItem = doc.payload.doc.data() as IMediaItem;
          mediaItem.id = doc.payload.doc.id;
          return mediaItem;
        }
        );
      });
  }

  getCategories(): Observable<IMediaItem[]> {
    return this.items$;
  }

  createMediaItem(mediaItem: IMediaItem): Promise<any> {
    mediaItem.id = mediaItem.assignedItem ? mediaItem.assignedItem : mediaItem.assignedItemType;
    return this.afs.collection(this.path).doc(mediaItem.id).set(mediaItem);
  }

  removeMediaItem(mediaItem: IMediaItem): Promise<any> {
    return firebase.storage().refFromURL(mediaItem.url).delete().then(() => {
      return this.afs.collection(this.path).doc(mediaItem.id).delete();
    });
  }

  deleteMediaItemById(mediaItemId: string): Promise<any> {
    return this.afs.collection(this.path).doc(mediaItemId).delete();
  }

  updateMediaItem(mediaItemId: string, mediaItem: IMediaItem): Promise<any> {
    return this.afs.collection(this.path).doc(mediaItemId).update(mediaItem);
  }

  getMediaItemById(mediaItemId: string): Observable<any> {
    return this.afs.doc<IMediaItem>(this.path + '/' + mediaItemId).valueChanges();
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IMediaGallery } from '../../interfaces/media-gallery.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class MediaGalleryService {

  private collection: AngularFirestoreCollection<IMediaGallery>;
  public items: Observable<IMediaGallery[]>;

  private path = `media-galleries`;

  constructor(public afs: AngularFirestore) {

    this.collection = afs.collection<IMediaGallery>(this.path);
    this.items = this.collection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as IMediaGallery;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  createMediaGallery(mediaGallery: IMediaGallery) {
    return this.collection.add(mediaGallery);
  }

  removeMediaGallery(mediaGallery: IMediaGallery): Promise<any> {
    return this.collection.doc(mediaGallery.id).delete();
  }

  updateMediaGallery(mediaGalleryId: string, mediaGallery: IMediaGallery): Promise<any> {
    return this.collection.doc(mediaGalleryId).update(mediaGallery);
  }

  getMediaGalleryById(mediaGalleryId: string): Observable<any> {
    return this.collection.doc(mediaGalleryId).snapshotChanges();
  }

}

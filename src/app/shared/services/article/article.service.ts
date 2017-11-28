import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IArticle } from '../../interfaces/article.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { DocumentChangeAction } from 'angularfire2/firestore/interfaces';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';

@Injectable()
export class ArticleService {

  collectionRef: AngularFirestoreCollection<IArticle>;
  items$: Observable<IArticle[]>;

  private path = `articles`;

  constructor(private afs: AngularFirestore,
    private authService: AuthService) {
    this.collectionRef = this.afs.collection(this.path);
    this.items$ = this.collectionRef.snapshotChanges()
      .map((articles: DocumentChangeAction[]) => {
        return articles.map((doc: DocumentChangeAction) => {
          const article = doc.payload.doc.data() as IArticle;
          article.id = doc.payload.doc.id;
          return article;
        });
      });
  }

  getArticles(): Observable<IArticle[]> {
    return this.items$;
  }

  createArticle(article: IArticle): void {
    this.afs.collection(this.path).doc(article.id).set(article);
  }

  removeArticle(article: IArticle): Promise<any> {
    return this.afs.collection(this.path).doc(article.id).delete();
  }

  updateArticle(articleId: string, article: IArticle): Promise<any> {
    return this.afs.collection(this.path).doc(articleId).update(article);
  }

  getArticleById(articleId: string): Observable<IArticle> {
    return this.afs.doc<IArticle>(this.path + '/' + articleId).valueChanges();
  }

  getArticlesForSeason(seasonRange: any): Observable<any> {
    return this.afs.collection(this.path, ref => {
      let query: firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      query = query
        .where('articleDate', '>=', seasonRange.startDate.toISOString())
        .where('articleDate', '<', seasonRange.endDate.toISOString());
      return query;
    }).valueChanges();
  }

  setNewArticle() {
    const data: IArticle = {
      id: this.afs.createId(),
      title: '',
      text: ' ',
      creation: this.authService.getCreation()
    };
    // this.createArticle(data);
    return data;
  }

}

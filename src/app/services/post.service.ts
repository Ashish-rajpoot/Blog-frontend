import { Observable } from 'rxjs';
import { collectionData, docData, Firestore, doc, updateDoc, increment } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { collection, query, where, limit, orderBy } from '@firebase/firestore';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: Firestore,
    //  private afs: AngularFirestore
  ) { }

  loadPostsFeaturedData(): Observable<any> {
    const postsRef = collection(this.firestore, 'post');
    const q = query(postsRef, where('isFeatured', '==', true), limit(4));
    console.log(q);
    return collectionData(q, { idField: 'categoryId' });
  }
  loadPostsDataByCategory(categoryId: string): Observable<any> {
    const posts = collection(this.firestore, 'post');
    const q = query(posts, where('category.categoryId', '==', categoryId));
    // const data = collectionData(q, {idField: 'categoryId'});
    return collectionData(q, { idField: 'categoryId' });
  }

  loadLatestCreatedAt(): Observable<any> {
    const posts = collection(this.firestore, 'post');
    const q = query(posts, orderBy('createdAt'));
    return collectionData(q, { idField: 'categoryId' });
  }

  loadSinglePost(postId: string): Observable<any> {
    const post = doc(this.firestore, `post/${postId}`);
    return docData(post, { idField: 'postId' });
  }

  loadSimilarPost(categoryId: string): Observable<any> {
    const posts = collection(this.firestore, 'post');
    const q = query(posts, where('category.categoryId', '==', categoryId), limit(4));
    return collectionData(q, { idField: 'categoryId' });
  }

  loadPostCount(postId: string) {
    const viewsCount = {
      // views : firebase.default.Firestore.FieldValue.increment(1);
      views: increment(1)
    }
    const posts = doc(this.firestore, `post/${postId}`);
    console.log(posts);
    // this.afs.(posts, 'views', viewsCount);
    updateDoc(posts, viewsCount)
      .then(() => {
        console.log('post count', viewsCount);
      });


  }
}

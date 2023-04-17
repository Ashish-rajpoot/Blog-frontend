import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, query, where } from '@firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // category : Category[] = [];

  constructor(private firestore: Firestore) { }

  getCategories(): Observable<any> {
    const categoryRef = collection(this.firestore, 'categories');
    return collectionData(categoryRef, { idField: 'id' });
  };

  getCategoryById(categoryId : string):Observable<any> {
    const posts = collection(this.firestore, 'categories');
    // const q = query(posts, where('category.categoryId', '==', categoryId));
    const q = query(posts, where('categoryId', '==', categoryId));
    return collectionData(q, {idField: 'categoryId'});
  }
}


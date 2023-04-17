import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { addDoc, collectionData, doc, Firestore, deleteDoc } from '@angular/fire/firestore';
import { query, where, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberserviceService {

  isExists: boolean = false;
  isSubscribed: boolean = false;

  constructor(private firestore: Firestore, private toastrService: ToastrService) { }

  async addSub(formData: any) {
    const collectionRef = collection(this.firestore, 'subscribers');
     await addDoc(collectionRef, formData)
      .then(() => {
        return  this.toastrService.success('subscribers added successfully')
      });
  }

  checkMail(subemail: string) {
    const collectionRef = collection(this.firestore, 'subscribers');
    const q = query(collectionRef, where('email', '==', subemail));
    this.toastrService.warning('subscribers already exist')

    return collectionData(q);
  }

  fetchAllSubscribers(): Observable<any> {
    const collectionRef = collection(this.firestore, 'subscribers');
    return collectionData(collectionRef, { idField: "id" });
  }

  deleteUser(userId: string) {
    const collectionRef = collection(this.firestore, 'subscribers');
    const docRef = doc(collectionRef, `subscribers/${userId}`)

    deleteDoc(docRef);
  }

}


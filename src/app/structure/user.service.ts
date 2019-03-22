import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { UserInfo } from './user-info.model';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: UserInfo;

  constructor(
    public firestore: AngularFirestore,
  ) { }

  getAll(){
    return this.firestore.collection("Users").snapshotChanges();
  }
}

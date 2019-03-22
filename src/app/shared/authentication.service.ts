import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public loginStatus = false;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public firestore: AngularFirestore
  ) { }

   SignUp(email, password, data) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(
        (result) => {
        this.SignIn(email, password);
        this.firestore.collection('Users').add(data);
        console.log(result.user);
      }).catch((error) => {
        window.alert(error.message);
      })
  }

  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         this.loginStatus = true;
         localStorage.setItem('checkStatus', JSON.stringify(this.loginStatus));
         this.router.navigate(['nav']);
      }).catch((error) => {
        window.alert(error.message);
      })
  }

  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['']);
    })
  }
}

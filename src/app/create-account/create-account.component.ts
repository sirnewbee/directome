import { Component, OnInit } from '@angular/core';
import { UserService } from '../structure/user.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {


  constructor(private service : UserService,
    private firestore: AngularFirestore) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
    
    this.service.formData = {
      firstName: '',
      lastName: '',
      email: '',
      landline: '',
      mobile: '',
      password: '',
    }
  }

  onSubmit(form: NgForm){
    let data = form.value;
    this.firestore.collection('Users').add(data);
    this.resetForm(form);
  }
}

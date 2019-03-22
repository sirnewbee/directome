import { Component, OnInit } from '@angular/core';
import { UserService } from '../structure/user.service';
import { AuthenticationService } from '../shared/authentication.service'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {


  constructor(private service : UserService,
    public authenticationService: AuthenticationService
    ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(){
    this.service.formData = {
      firstName: '',
      lastName: '',
      email: '',
      landline: '',
      mobile: '',
      company: ''
    }
  }

  onSubmit(username, password){
    let data = this.service.formData;
    this.authenticationService.SignUp(username, password, data);
  }
}

import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {LoginComponent} from '../login/login.component'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

 
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  openModal() {
    this.modalRef = this.modalService.show(LoginComponent,  {
      initialState: {
        title: 'Modal title',
        data: {}
      }
    });
  }
}

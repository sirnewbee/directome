import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {LoginComponent} from '../login/login.component'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  openModal() {
    this.modalRef = this.modalService.show(LoginComponent,  {
      initialState: {
        title: 'Modal title',
        data: {}
      },
      class: 'modal-lg myModal'
    });
  }
}

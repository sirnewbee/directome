import { Injectable } from '@angular/core';
import { UserInfo } from './user-info.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: UserInfo;

  constructor() { }
}

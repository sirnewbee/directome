import { Component, OnInit } from '@angular/core';
import { UserService } from '../structure/user.service';
import { UserInfo } from '../structure/user-info.model';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  public logoPath: string = "./assets/Logos/test.jpg";
  public listArr: any[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAll().subscribe( actionArray =>{
      this.listArr = actionArray.map( item => {
        return { ...item.payload.doc.data() };
      });
      localStorage.setItem("arrUsers", JSON.stringify(this.listArr));
    });

    this.listArr = JSON.parse(localStorage.getItem("arrUsers"));
    localStorage.removeItem("arrUsers");
  }
}

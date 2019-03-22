import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-nav-bar-dashboard',
  templateUrl: './nav-bar-dashboard.component.html',
  styleUrls: ['./nav-bar-dashboard.component.css']
})
export class NavBarDashboardComponent implements OnInit {
  private selected: string = "Directory";
  private loginStatus: boolean;

  private ActiveBGColor = {
    backgroundColor: 'rgba(228, 18, 12, 0.9)'
  };

  private DefaultBGColor = {
    backgroundColor: 'rgba(228, 18, 12, 0.3)'
  };

  constructor(
    public authenticationService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
    this.loginStatus = JSON.parse(localStorage.getItem('checkStatus'));
    console.log(this.loginStatus);
    (this.loginStatus)?console.log("logged in"):this.invalidSignIn();
  }

  invalidSignIn(){
    this.router.navigate(['']);
    window.alert("Do not have the permission to access.");
  }

  changeSelected(navItem){
    this.selected = navItem;
    console.log(this.selected);
  }

  changeBGColor(navItem){
    return (this.selected === navItem) ? this.ActiveBGColor : this.DefaultBGColor;
  }

  updateLoginStatus(){
    this.loginStatus = false;
    localStorage.setItem('checkStatus', JSON.stringify(this.loginStatus));
    console.log(this.loginStatus);
  }
}

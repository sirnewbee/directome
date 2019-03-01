import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-dashboard',
  templateUrl: './nav-bar-dashboard.component.html',
  styleUrls: ['./nav-bar-dashboard.component.css']
})
export class NavBarDashboardComponent implements OnInit {
  private selected: string = "Directory";

  private ActiveBGColor = {
    backgroundColor: 'rgba(228, 18, 12, 0.9)'
  };

  private DefaultBGColor = {
    backgroundColor: 'rgba(228, 18, 12, 0.3)'
  };

  constructor() { }

  ngOnInit() {
  }

  changeSelected(navItem){
    this.selected = navItem;
    console.log(this.selected);
  }

  changeBGColor(navItem){
    return (this.selected === navItem) ? this.ActiveBGColor : this.DefaultBGColor;
  }
}

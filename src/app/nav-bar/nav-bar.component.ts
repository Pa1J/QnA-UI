import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  LoggedUser : string = "Pavan Kumar";
  date = new Date();
  NavMenuItems = [{
    Id:1,
    Name: "HOME",
    IsActiveMenu: true
  },
  {
    Id:2,
    Name: "CATEGORIES",
    IsActiveMenu: false
  },
  {
    Id:3,
    Name: 'USERS',
    IsActiveMenu: false
  }
]

  constructor() {}

  navSelect(id: any){
    this.NavMenuItems.forEach(navMenu => {
      navMenu.IsActiveMenu = false;
      if(navMenu.Id == id){
        navMenu.IsActiveMenu = true;
      }
    })
  }

  ngOnInit(): void {

  }

}

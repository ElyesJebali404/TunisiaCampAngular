import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUrl!: string;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        console.log(val.url);
        this.currentUrl = val.url;
      }
    });
   
  }

  isAdmin() {
    if (localStorage.getItem("userRole") == '["ROLE_ADMIN"]') {
      return true;
    }
    return false;
  }

  isConnected() {
    if (localStorage.getItem("userRole") == '["ROLE_USER"]') {
      return true;
    }
    else if (localStorage.getItem("userRole") == '["ROLE_ADMIN"]') {
      return true;
    }
    else {
      return false;
    }

  }

}



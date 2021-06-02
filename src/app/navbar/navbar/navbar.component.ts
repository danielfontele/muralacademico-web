import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/sidenav/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private sidenav: SidenavService,
  ) { }

  ngOnInit(): void {
  }

  instance = "";

  goHome() {
    this.router.navigate(['/']);
  }

  toggle() {
    this.sidenav.callToggle();
  }

}

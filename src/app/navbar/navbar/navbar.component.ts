import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/sidenav/sidenav.service';
import { AuthGuardService } from '../../guards/auth-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private sidenav: SidenavService,
    private authService: AuthGuardService,
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

  logout() {
    this.authService.logout();
  }

  isLogged() {
    return this.authService.isLoggedInBoolean;
  }


}

import { Injectable } from '@angular/core';
import { SidenavComponent } from './sidenav.component';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor() { }

  isShowing: boolean;

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  callToggle() {
    this.toggleSidenav();
  }
  
  
}

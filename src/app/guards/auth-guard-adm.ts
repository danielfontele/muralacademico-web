import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdm implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthGuardService,
    private snackbar: MatSnackBar,
  ) { }

  logar: boolean = false;
  admin: boolean = false;

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.admin = this.authService.isAdminBoolean;
    this.logar = this.authService.isLoggedInBoolean;
    if (!this.admin) {
      this.showMessage('Permissão insuficiente', true)
    }
    return this.logar && this.admin;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 1200,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

}

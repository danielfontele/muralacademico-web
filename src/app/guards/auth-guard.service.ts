import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioDto } from '../model/usuario/usuario-dto';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  public get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private usuarioService: UsuarioService,
    private snackbar: MatSnackBar,
  ) { }

  usuarios: UsuarioDto[];

  ngOnInit(): void { }

  async login(user: UsuarioDto) {
    this.usuarios = await this.httpClient.get<UsuarioDto[]>(`${environment.config.URL_API}/usuario/`).toPromise();

    if (this.usuarios != undefined) {
      this.usuarios.forEach(element => {
        if (user.usuario == element.usuario && user.senha == element.senha) {
          this.loggedIn.next(true);
          this.router.navigate(['/']);
        }
      });
    } else if (user.usuario != '' && user.senha != '') {
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }

    if (this.loggedIn.getValue()) {
      this.showMessage('Logado com sucesso', false);
    } else {
      this.showMessage('Usuário ou senha incorretos', true);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  async tempUsers() {
    this.usuarios = await this.httpClient.get<UsuarioDto[]>(`${environment.config.URL_API}/usuario/`).toPromise();
    return this.usuarios;
  }
}

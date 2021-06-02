import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioDto } from '../model/usuario/usuario-dto';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  usuarios: UsuarioDto[];

  list(): Observable<UsuarioDto[]> {
    const url = `${environment.config.URL_API}/usuario/`;
    return this.httpClient.get<UsuarioDto[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  save(usuario: UsuarioDto): Observable<UsuarioDto> {
    const url = `${environment.config.URL_API}/usuario/add`;
    return this.httpClient.post<UsuarioDto>(url, usuario).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  edit(usuario: UsuarioDto): Observable<UsuarioDto> {
    const url = `${environment.config.URL_API}/usuario/edit`;
    return this.httpClient.put<UsuarioDto>(url, usuario).pipe(
      map(obj => obj)
    );
  }

  delete(id: number): void {
    const url = `${environment.config.URL_API}/usuario/delete/${id}`;
    this.httpClient.delete(url).subscribe({
      next: data => {
        this.showMessage('Deletado com sucesso', false);
      },
      error: error => {
        catchError(e => this.errorHandler(e));
      },
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }


  findById(id: number): Observable<UsuarioDto> {
    const url = `${environment.config.URL_API}/usuario/`;
    return this.httpClient.get<UsuarioDto>(url + id).pipe(
      map((usuario) => usuario),
      catchError((e) => this.errorHandler(e))
    );
  }

}

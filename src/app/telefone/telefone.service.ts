import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TelefoneDto } from '../model/telefone/telefone-dto';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  telefones: TelefoneDto[];

  list(): Observable<TelefoneDto[]> {
    const url = `${environment.config.URL_API}/telefone/`;
    return this.httpClient.get<TelefoneDto[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  save(telefone: TelefoneDto): Observable<TelefoneDto> {
    const url = `${environment.config.URL_API}/telefone/add`;
    return this.httpClient.post<TelefoneDto>(url, telefone).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  edit(telefone: TelefoneDto): Observable<TelefoneDto> {
    const url = `${environment.config.URL_API}/telefone/edit`;
    return this.httpClient.put<TelefoneDto>(url, telefone).pipe(
      map(obj => obj)
    );
  }

  delete(id: number): void {
    const url = `${environment.config.URL_API}/telefone/delete/${id}`;
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


  findById(id: number): Observable<TelefoneDto> {
    const url = `${environment.config.URL_API}/telefone/`;
    return this.httpClient.get<TelefoneDto>(url + id).pipe(
      map((telefone) => telefone),
      catchError((e) => this.errorHandler(e))
    );
  }

}

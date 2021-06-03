import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PessoaDto } from '../model/pessoa/pessoa-dto';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  pessoas: PessoaDto[];

  list(): Observable<PessoaDto[]> {
    const url = `${environment.config.URL_API}/pessoa/`;
    return this.httpClient.get<PessoaDto[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  save(pessoa: PessoaDto): Observable<PessoaDto> {
    const url = `${environment.config.URL_API}/pessoa/add`;
    return this.httpClient.post<PessoaDto>(url, pessoa).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  edit(pessoa: PessoaDto): Observable<PessoaDto> {
    const url = `${environment.config.URL_API}/pessoa/edit`;
    return this.httpClient.put<PessoaDto>(url, pessoa).pipe(
      map(obj => obj)
    );
  }

  delete(id: number): void {
    const url = `${environment.config.URL_API}/pessoa/delete/${id}`;
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


  findById(id: number): Observable<PessoaDto> {
    const url = `${environment.config.URL_API}/pessoa/`;
    return this.httpClient.get<PessoaDto>(url + id).pipe(
      map((pessoa) => pessoa),
      catchError((e) => this.errorHandler(e))
    );
  }

}

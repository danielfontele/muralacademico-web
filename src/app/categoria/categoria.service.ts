import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaDto } from '../model/categoria/categoria-dto';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  categorias: CategoriaDto[];

  list(): Observable<CategoriaDto[]> {
    const url = `${environment.config.URL_API}/categoria/`;
    return this.httpClient.get<CategoriaDto[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  save(categoria: CategoriaDto): Observable<CategoriaDto> {
    const url = `${environment.config.URL_API}/categoria/add`;
    return this.httpClient.post<CategoriaDto>(url, categoria).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  edit(categoria: CategoriaDto): Observable<CategoriaDto> {
    const url = `${environment.config.URL_API}/categoria/edit`;
    return this.httpClient.put<CategoriaDto>(url, categoria).pipe(
      map(obj => obj)
    );
  }

  delete(id: number): void {
    const url = `${environment.config.URL_API}/categoria/delete/${id}`;
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


  findById(id: number): Observable<CategoriaDto> {
    const url = `${environment.config.URL_API}/categoria/`;
    return this.httpClient.get<CategoriaDto>(url + id).pipe(
      map((categoria) => categoria),
      catchError((e) => this.errorHandler(e))
    );
  }

}

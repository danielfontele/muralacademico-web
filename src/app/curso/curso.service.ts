import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoDto } from '../model/curso/curso-dto';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  cursos: CursoDto[];

  list(): Observable<CursoDto[]> {
    const url = `${environment.config.URL_API}/curso/`;
    return this.httpClient.get<CursoDto[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  save(curso: CursoDto): Observable<CursoDto> {
    const url = `${environment.config.URL_API}/curso/add`;
    return this.httpClient.post<CursoDto>(url, curso).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  edit(curso: CursoDto): Observable<CursoDto> {
    const url = `${environment.config.URL_API}/curso/edit`;
    return this.httpClient.put<CursoDto>(url, curso).pipe(
      map(obj => obj)
    );
  }

  delete(id: number): void {
    const url = `${environment.config.URL_API}/curso/delete/${id}`;
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


  findById(id: number): Observable<CursoDto> {
    const url = `${environment.config.URL_API}/curso/`;
    return this.httpClient.get<CursoDto>(url + id).pipe(
      map((curso) => curso),
      catchError((e) => this.errorHandler(e))
    );
  }

}

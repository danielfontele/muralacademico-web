import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PalestranteDto } from '../model/palestrante/palestrante-dto';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PalestranteService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  palestrantes: PalestranteDto[];

  list(): Observable<PalestranteDto[]> {
    const url = `${environment.config.URL_API}/palestrante/`;
    return this.httpClient.get<PalestranteDto[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  save(palestrante: PalestranteDto): Observable<PalestranteDto> {
    const url = `${environment.config.URL_API}/palestrante/add`;
    return this.httpClient.post<PalestranteDto>(url, palestrante).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  edit(palestrante: PalestranteDto): Observable<PalestranteDto> {
    const url = `${environment.config.URL_API}/palestrante/edit`;
    return this.httpClient.put<PalestranteDto>(url, palestrante).pipe(
      map(obj => obj)
    );
  }

  delete(id: number): void {
    const url = `${environment.config.URL_API}/palestrante/delete/${id}`;
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


  findById(id: number): Observable<PalestranteDto> {
    const url = `${environment.config.URL_API}/palestrante/`;
    return this.httpClient.get<PalestranteDto>(url + id).pipe(
      map((palestrante) => palestrante),
      catchError((e) => this.errorHandler(e))
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostagemDto } from '../model/postagem/postagem-dto';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private httpClient: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  postagems: PostagemDto[];

  list(): Observable<PostagemDto[]> {
    const url = `${environment.config.URL_API}/postagem/`;
    return this.httpClient.get<PostagemDto[]>(url).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  save(postagem: PostagemDto): Observable<PostagemDto> {
    const url = `${environment.config.URL_API}/postagem/add`;
    return this.httpClient.post<PostagemDto>(url, postagem).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  edit(postagem: PostagemDto): Observable<PostagemDto> {
    const url = `${environment.config.URL_API}/postagem/edit`;
    return this.httpClient.put<PostagemDto>(url, postagem).pipe(
      map(obj => obj)
    );
  }

  delete(id: number): void {
    const url = `${environment.config.URL_API}/postagem/delete/${id}`;
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


  findById(id: number): Observable<PostagemDto> {
    const url = `${environment.config.URL_API}/postagem/`;
    return this.httpClient.get<PostagemDto>(url + id).pipe(
      map((postagem) => postagem),
      catchError((e) => this.errorHandler(e))
    );
  }

}

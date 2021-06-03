import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagemService } from './postagem.service';
import { PostagemMainComponent } from './postagem-main/postagem-main.component';
import { PostagemListarComponent } from './postagem-listar/postagem-listar.component';
import { PostagemCadastrarComponent } from './postagem-cadastrar/postagem-cadastrar.component';
import { PostagemEditarComponent } from './postagem-editar/postagem-editar.component';
import { PostagemDeletarComponent } from './postagem-deletar/postagem-deletar.component';
import { PostagemrouteModule } from './postagemroute/postagemroute.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    PostagemMainComponent,
    PostagemListarComponent,
    PostagemCadastrarComponent,
    PostagemEditarComponent,
    PostagemDeletarComponent
  ],
  imports: [
    CommonModule,
    PostagemrouteModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatButtonToggleModule,
    RouterModule,
    MatPaginatorModule,
    MatSelectModule
  ], exports: [
    PostagemMainComponent,
    PostagemListarComponent,
    PostagemCadastrarComponent,
    PostagemEditarComponent,
    PostagemDeletarComponent
  ], providers: [
    PostagemService
  ]
})
export class PostagemModule { }

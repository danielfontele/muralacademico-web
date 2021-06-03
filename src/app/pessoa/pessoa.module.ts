import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from './pessoa.service';
import { PessoaMainComponent } from './pessoa-main/pessoa-main.component';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';
import { PessoaCadastrarComponent } from './pessoa-cadastrar/pessoa-cadastrar.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';
import { PessoaDeletarComponent } from './pessoa-deletar/pessoa-deletar.component';
import { PessoarouteModule } from './pessoaroute/pessoaroute.module';
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
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    PessoaMainComponent,
    PessoaListarComponent,
    PessoaCadastrarComponent,
    PessoaEditarComponent,
    PessoaDeletarComponent
  ],
  imports: [
    CommonModule,
    PessoarouteModule,
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
    NgxMaskModule
  ], exports: [
    PessoaMainComponent,
    PessoaListarComponent,
    PessoaCadastrarComponent,
    PessoaEditarComponent,
    PessoaDeletarComponent
  ], providers: [
    PessoaService
  ]
})
export class PessoaModule { }

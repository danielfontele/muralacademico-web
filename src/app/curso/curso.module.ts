import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService } from './curso.service';
import { CursoMainComponent } from './curso-main/curso-main.component';
import { CursoListarComponent } from './curso-listar/curso-listar.component';
import { CursoCadastrarComponent } from './curso-cadastrar/curso-cadastrar.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';
import { CursoDeletarComponent } from './curso-deletar/curso-deletar.component';
import { CursorouteModule } from './cursoroute/cursoroute.module';
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

@NgModule({
  declarations: [
    CursoMainComponent,
    CursoListarComponent,
    CursoCadastrarComponent,
    CursoEditarComponent,
    CursoDeletarComponent
  ],
  imports: [
    CommonModule,
    CursorouteModule,
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
    MatPaginatorModule
  ], exports: [
    CursoMainComponent,
    CursoListarComponent,
    CursoCadastrarComponent,
    CursoEditarComponent,
    CursoDeletarComponent
  ], providers: [
    CursoService
  ]
})
export class CursoModule { }

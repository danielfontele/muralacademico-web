import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaService } from './categoria.service';
import { CategoriaMainComponent } from './categoria-main/categoria-main.component';
import { CategoriaListarComponent } from './categoria-listar/categoria-listar.component';
import { CategoriaCadastrarComponent } from './categoria-cadastrar/categoria-cadastrar.component';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';
import { CategoriaDeletarComponent } from './categoria-deletar/categoria-deletar.component';
import { CategoriarouteModule } from './categoriaroute/categoriaroute.module';
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
    CategoriaMainComponent,
    CategoriaListarComponent,
    CategoriaCadastrarComponent,
    CategoriaEditarComponent,
    CategoriaDeletarComponent
  ],
  imports: [
    CommonModule,
    CategoriarouteModule,
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
    CategoriaMainComponent,
    CategoriaListarComponent,
    CategoriaCadastrarComponent,
    CategoriaEditarComponent,
    CategoriaDeletarComponent
  ], providers: [
    CategoriaService
  ]
})
export class CategoriaModule { }

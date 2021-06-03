import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurspCadastrarComponent } from './cursp-cadastrar/cursp-cadastrar.component';
import { CursoCadastrarComponent } from './curso-cadastrar/curso-cadastrar.component';
import { CursoDeletarComponent } from './curso-deletar/curso-deletar.component';
import { CursoEditarComponent } from './curso-editar/curso-editar.component';
import { CursoListarComponent } from './curso-listar/curso-listar.component';
import { CursoMainComponent } from './curso-main/curso-main.component';



@NgModule({
  declarations: [
    CurspCadastrarComponent,
    CursoCadastrarComponent,
    CursoDeletarComponent,
    CursoEditarComponent,
    CursoListarComponent,
    CursoMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursoModule { }

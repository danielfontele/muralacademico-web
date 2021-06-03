import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaCadastrarComponent } from './pessoa-cadastrar/pessoa-cadastrar.component';
import { PessoaDeletarComponent } from './pessoa-deletar/pessoa-deletar.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';
import { PessoaMainComponent } from './pessoa-main/pessoa-main.component';



@NgModule({
  declarations: [
    PessoaCadastrarComponent,
    PessoaDeletarComponent,
    PessoaEditarComponent,
    PessoaListarComponent,
    PessoaMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PessoaModule { }

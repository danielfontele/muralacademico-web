import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostagemCadastrarComponent } from './postagem-cadastrar/postagem-cadastrar.component';
import { PostagemDeletarComponent } from './postagem-deletar/postagem-deletar.component';
import { PostagemEditarComponent } from './postagem-editar/postagem-editar.component';
import { PostagemListarComponent } from './postagem-listar/postagem-listar.component';
import { PostagemMainComponent } from './postagem-main/postagem-main.component';



@NgModule({
  declarations: [
    PostagemCadastrarComponent,
    PostagemDeletarComponent,
    PostagemEditarComponent,
    PostagemListarComponent,
    PostagemMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostagemModule { }

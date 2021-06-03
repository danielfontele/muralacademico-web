import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoCadastrarComponent } from './endereco-cadastrar/endereco-cadastrar.component';
import { EnderecoListarComponent } from './endereco-listar/endereco-listar.component';
import { EnderecoEditarComponent } from './endereco-editar/endereco-editar.component';
import { EnderecoDeletarComponent } from './endereco-deletar/endereco-deletar.component';
import { EnderecoMainComponent } from './endereco-main/endereco-main.component';



@NgModule({
  declarations: [
    EnderecoCadastrarComponent,
    EnderecoListarComponent,
    EnderecoEditarComponent,
    EnderecoDeletarComponent,
    EnderecoMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EnderecoModule { }

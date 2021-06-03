import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefoneCadastrarComponent } from './telefone-cadastrar/telefone-cadastrar.component';
import { TelefoneDeletarComponent } from './telefone-deletar/telefone-deletar.component';
import { TelefoneEditarComponent } from './telefone-editar/telefone-editar.component';
import { TelefoneListarComponent } from './telefone-listar/telefone-listar.component';
import { TelefoneMainComponent } from './telefone-main/telefone-main.component';



@NgModule({
  declarations: [
    TelefoneCadastrarComponent,
    TelefoneDeletarComponent,
    TelefoneEditarComponent,
    TelefoneListarComponent,
    TelefoneMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TelefoneModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalestranteCadastrarComponent } from './palestrante-cadastrar/palestrante-cadastrar.component';
import { PalestranteEditarComponent } from './palestrante-editar/palestrante-editar.component';
import { PalestranteDeletarComponent } from './palestrante-deletar/palestrante-deletar.component';
import { PalestranteListarComponent } from './palestrante-listar/palestrante-listar.component';
import { PalestranteMainComponent } from './palestrante-main/palestrante-main.component';



@NgModule({
  declarations: [
    PalestranteCadastrarComponent,
    PalestranteEditarComponent,
    PalestranteDeletarComponent,
    PalestranteListarComponent,
    PalestranteMainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PalestranteModule { }

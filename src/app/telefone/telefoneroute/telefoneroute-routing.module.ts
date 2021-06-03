import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelefoneListarComponent } from '../telefone-listar/telefone-listar.component';
import { TelefoneCadastrarComponent } from '../telefone-cadastrar/telefone-cadastrar.component';
import { TelefoneEditarComponent } from '../telefone-editar/telefone-editar.component';
import { TelefoneDeletarComponent } from '../telefone-deletar/telefone-deletar.component';
import { AuthGuard } from 'src/app/guards/auth-guard';
const routes: Routes = [

  {
    path: 'telefone',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
      },
      {
        path: 'listar',
        component: TelefoneListarComponent,
      },
      {
        path: 'cadastrar',
        component: TelefoneCadastrarComponent,
      },
      {
        path: 'editar',
        component: TelefoneEditarComponent,
      },
      {
        path: 'deletar',
        component: TelefoneDeletarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelefonerouteRoutingModule { }

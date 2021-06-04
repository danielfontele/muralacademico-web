import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PalestranteListarComponent } from '../palestrante-listar/palestrante-listar.component';
import { PalestranteCadastrarComponent } from '../palestrante-cadastrar/palestrante-cadastrar.component';
import { PalestranteEditarComponent } from '../palestrante-editar/palestrante-editar.component';
import { PalestranteDeletarComponent } from '../palestrante-deletar/palestrante-deletar.component';
import { AuthGuardAdm } from '../../guards/auth-guard-adm';

const routes: Routes = [

  {
    path: 'palestrante',
    canActivate: [AuthGuardAdm],
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
      },
      {
        path: 'listar',
        component: PalestranteListarComponent,
      },
      {
        path: 'cadastrar',
        component: PalestranteCadastrarComponent,
      },
      {
        path: 'editar',
        component: PalestranteEditarComponent,
      },
      {
        path: 'deletar',
        component: PalestranteDeletarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalestranterouteRoutingModule { }

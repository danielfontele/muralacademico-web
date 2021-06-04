import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListarComponent } from '../categoria-listar/categoria-listar.component';
import { CategoriaCadastrarComponent } from '../categoria-cadastrar/categoria-cadastrar.component';
import { CategoriaEditarComponent } from '../categoria-editar/categoria-editar.component';
import { CategoriaDeletarComponent } from '../categoria-deletar/categoria-deletar.component';
import { AuthGuardAdm } from '../../guards/auth-guard-adm';

const routes: Routes = [

  {
    path: 'categoria',
    canActivate: [AuthGuardAdm],
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
      },
      {
        path: 'listar',
        component: CategoriaListarComponent,
      },
      {
        path: 'cadastrar',
        component: CategoriaCadastrarComponent,
      },
      {
        path: 'editar',
        component: CategoriaEditarComponent,
      },
      {
        path: 'deletar',
        component: CategoriaDeletarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriarouteRoutingModule { }

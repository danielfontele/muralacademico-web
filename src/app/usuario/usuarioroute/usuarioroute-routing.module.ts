import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListarComponent } from '../usuario-listar/usuario-listar.component';
import { UsuarioCadastrarComponent } from '../usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioEditarComponent } from '../usuario-editar/usuario-editar.component';
import { UsuarioDeletarComponent } from '../usuario-deletar/usuario-deletar.component';
import { AuthGuardAdm } from '../../guards/auth-guard-adm';

const routes: Routes = [

  {
    path: 'usuario',
    canActivate: [AuthGuardAdm],
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
      },
      {
        path: 'listar',
        component: UsuarioListarComponent,
      },
      {
        path: 'cadastrar',
        component: UsuarioCadastrarComponent,
      },
      {
        path: 'editar',
        component: UsuarioEditarComponent,
      },
      {
        path: 'deletar',
        component: UsuarioDeletarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariorouteRoutingModule { }

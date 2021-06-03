import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaListarComponent } from '../pessoa-listar/pessoa-listar.component';
import { PessoaCadastrarComponent } from '../pessoa-cadastrar/pessoa-cadastrar.component';
import { PessoaEditarComponent } from '../pessoa-editar/pessoa-editar.component';
import { PessoaDeletarComponent } from '../pessoa-deletar/pessoa-deletar.component';
import { AuthGuard } from 'src/app/guards/auth-guard';
const routes: Routes = [

  {
    path: 'pessoa',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
      },
      {
        path: 'listar',
        component: PessoaListarComponent,
      },
      {
        path: 'cadastrar',
        component: PessoaCadastrarComponent,
      },
      {
        path: 'editar',
        component: PessoaEditarComponent,
      },
      {
        path: 'deletar',
        component: PessoaDeletarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoarouteRoutingModule { }

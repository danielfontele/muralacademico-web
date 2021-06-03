import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoListarComponent } from '../endereco-listar/endereco-listar.component';
import { EnderecoCadastrarComponent } from '../endereco-cadastrar/endereco-cadastrar.component';
import { EnderecoEditarComponent } from '../endereco-editar/endereco-editar.component';
import { EnderecoDeletarComponent } from '../endereco-deletar/endereco-deletar.component';
import { AuthGuard } from 'src/app/guards/auth-guard';
const routes: Routes = [

  {
    path: 'endereco',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
      },
      {
        path: 'listar',
        component: EnderecoListarComponent,
      },
      {
        path: 'cadastrar',
        component: EnderecoCadastrarComponent,
      },
      {
        path: 'editar',
        component: EnderecoEditarComponent,
      },
      {
        path: 'deletar',
        component: EnderecoDeletarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecorouteRoutingModule { }

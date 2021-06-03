import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostagemListarComponent } from '../postagem-listar/postagem-listar.component';
import { PostagemCadastrarComponent } from '../postagem-cadastrar/postagem-cadastrar.component';
import { PostagemEditarComponent } from '../postagem-editar/postagem-editar.component';
import { PostagemDeletarComponent } from '../postagem-deletar/postagem-deletar.component';
import { AuthGuard } from 'src/app/guards/auth-guard';
const routes: Routes = [

  {
    path: 'postagem',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
      },
      {
        path: 'listar',
        component: PostagemListarComponent,
      },
      {
        path: 'cadastrar',
        component: PostagemCadastrarComponent,
      },
      {
        path: 'editar',
        component: PostagemEditarComponent,
      },
      {
        path: 'deletar',
        component: PostagemDeletarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostagemrouteRoutingModule { }

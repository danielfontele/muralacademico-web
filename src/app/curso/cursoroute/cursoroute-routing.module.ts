import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListarComponent } from '../curso-listar/curso-listar.component';
import { CursoCadastrarComponent } from '../curso-cadastrar/curso-cadastrar.component';
import { CursoEditarComponent } from '../curso-editar/curso-editar.component';
import { CursoDeletarComponent } from '../curso-deletar/curso-deletar.component';
import { AuthGuard } from 'src/app/guards/auth-guard';
const routes: Routes = [

  {
    path: 'curso',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'listar',
        pathMatch: 'full',
      },
      {
        path: 'listar',
        component: CursoListarComponent,
      },
      {
        path: 'cadastrar',
        component: CursoCadastrarComponent,
      },
      {
        path: 'editar',
        component: CursoEditarComponent,
      },
      {
        path: 'deletar',
        component: CursoDeletarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursorouteRoutingModule { }

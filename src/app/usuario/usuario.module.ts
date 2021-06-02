import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioMainComponent } from './usuario-main/usuario-main.component';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioDeletarComponent } from './usuario-deletar/usuario-deletar.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsuariorouteModule } from './usuarioroute/usuarioroute.module';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    UsuarioMainComponent,
    UsuarioCadastrarComponent,
    UsuarioDeletarComponent,
    UsuarioEditarComponent,
    UsuarioListarComponent
  ],
  imports: [
    CommonModule,
    UsuariorouteModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatButtonToggleModule,
    RouterModule,
    MatPaginatorModule
  ], providers: [
    UsuarioService
  ],
})
export class UsuarioModule { }

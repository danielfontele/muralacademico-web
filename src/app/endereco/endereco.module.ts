import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoService } from './endereco.service';
import { EnderecoMainComponent } from './endereco-main/endereco-main.component';
import { EnderecoListarComponent } from './endereco-listar/endereco-listar.component';
import { EnderecoCadastrarComponent } from './endereco-cadastrar/endereco-cadastrar.component';
import { EnderecoEditarComponent } from './endereco-editar/endereco-editar.component';
import { EnderecoDeletarComponent } from './endereco-deletar/endereco-deletar.component';
import { EnderecorouteModule } from './enderecoroute/enderecoroute.module';
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

@NgModule({
  declarations: [
    EnderecoMainComponent,
    EnderecoListarComponent,
    EnderecoCadastrarComponent,
    EnderecoEditarComponent,
    EnderecoDeletarComponent
  ],
  imports: [
    CommonModule,
    EnderecorouteModule,
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
  ], exports: [
    EnderecoMainComponent,
    EnderecoListarComponent,
    EnderecoCadastrarComponent,
    EnderecoEditarComponent,
    EnderecoDeletarComponent
  ], providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }

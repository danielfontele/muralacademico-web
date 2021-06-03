import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefoneService } from './telefone.service';
import { TelefoneMainComponent } from './telefone-main/telefone-main.component';
import { TelefoneListarComponent } from './telefone-listar/telefone-listar.component';
import { TelefoneCadastrarComponent } from './telefone-cadastrar/telefone-cadastrar.component';
import { TelefoneEditarComponent } from './telefone-editar/telefone-editar.component';
import { TelefoneDeletarComponent } from './telefone-deletar/telefone-deletar.component';
import { TelefonerouteModule } from './telefoneroute/telefoneroute.module';
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
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    TelefoneMainComponent,
    TelefoneListarComponent,
    TelefoneCadastrarComponent,
    TelefoneEditarComponent,
    TelefoneDeletarComponent
  ],
  imports: [
    CommonModule,
    TelefonerouteModule,
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
    MatPaginatorModule,
    MatSelectModule
  ], exports: [
    TelefoneMainComponent,
    TelefoneListarComponent,
    TelefoneCadastrarComponent,
    TelefoneEditarComponent,
    TelefoneDeletarComponent
  ], providers: [
    TelefoneService
  ]
})
export class TelefoneModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PalestranteMainComponent } from './palestrante-main/palestrante-main.component';
import { PalestranteCadastrarComponent } from './palestrante-cadastrar/palestrante-cadastrar.component';
import { PalestranteDeletarComponent } from './palestrante-deletar/palestrante-deletar.component';
import { PalestranteEditarComponent } from './palestrante-editar/palestrante-editar.component';
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
import { PalestranterouteModule } from './palestranteroute/palestranteroute.module';
import { PalestranteListarComponent } from './palestrante-listar/palestrante-listar.component';
import { PalestranteService } from './palestrante.service';

@NgModule({
  declarations: [
    PalestranteMainComponent,
    PalestranteCadastrarComponent,
    PalestranteDeletarComponent,
    PalestranteEditarComponent,
    PalestranteListarComponent
  ],
  imports: [
    CommonModule,
    PalestranterouteModule,
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
    PalestranteService
  ],
})
export class PalestranteModule { }

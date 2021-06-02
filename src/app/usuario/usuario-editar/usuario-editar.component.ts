import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { UsuarioDto } from '../../model/usuario/usuario-dto';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) { }

  displayedColumns: string[] = ['id', 'usuario', 'senha', 'versao'];

  usuarios: UsuarioDto[];

  dataSource;

  ngOnInit(): void {
    this.usuarioService.list().subscribe(dados => {
      this.usuarios = dados;
      this.dataSource = this.usuarios;
    });
    this.formUsuario = this.fb.group({
      id: [],
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(3)]],
      versao: []
    });
    this.formUsuario.controls['id'].disable();
    this.formUsuario.controls['versao'].disable();
  }

  selectedRow(row: UsuarioDto) {
    this.formUsuario.controls['id'].setValue(row.id);
    this.formUsuario.controls['versao'].setValue(row.versao + 1);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formUsuario: FormGroup;
  formSubmitAttempt: boolean;
  usuario: UsuarioDto;
  matcher = new MyErrorStateMatcher();

  onSubmit(): void {
    this.usuario = this.formUsuario.getRawValue();
    this.usuarioService.edit(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Cliente editado com sucesso', false);
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.formUsuario.get(field).valid && this.formUsuario.get(field).touched) ||
      (this.formUsuario.get(field).untouched && this.formSubmitAttempt) ||
      (this.formUsuario.get(field).errors)
    );
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formUsuario.controls;
  }

}

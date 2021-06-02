import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioDto } from 'src/app/model/usuario/usuario-dto';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private fb: FormBuilder
  ) { }

  formUsuario: FormGroup;
  formSubmitAttempt: boolean;
  usuario: UsuarioDto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.formUsuario = this.fb.group({
      id: [],
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(3)]],
      versao: []
    });
    this.formUsuario.controls['id'].disable();
    this.formUsuario.controls['versao'].disable();
    this.formUsuario.controls['id'].setValue("???");
    this.formUsuario.controls['versao'].setValue(1);
  }

  onSubmit(): void {
    this.usuario = this.formUsuario.value;
    this.usuario.versao = 1;
    this.usuarioService.save(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Cliente salvo com sucesso', false);
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

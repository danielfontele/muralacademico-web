import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CategoriaDto } from 'src/app/model/categoria/categoria-dto';
import { CategoriaService } from '../categoria.service';
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
  selector: 'app-categoria-cadastrar',
  templateUrl: './categoria-cadastrar.component.html',
  styleUrls: ['./categoria-cadastrar.component.css']
})
export class CategoriaCadastrarComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService,
    private fb: FormBuilder
  ) { }

  formCategoria: FormGroup;
  formSubmitAttempt: boolean;
  categoria: CategoriaDto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.formCategoria = this.fb.group({
      id: [],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      versao: []
    });
    this.formCategoria.controls['id'].disable();
    this.formCategoria.controls['versao'].disable();
    this.formCategoria.controls['id'].setValue("???");
    this.formCategoria.controls['versao'].setValue(1);
  }

  onSubmit(): void {
    this.categoria = this.formCategoria.value;
    this.categoria.versao = 1;
    this.categoriaService.save(this.categoria).subscribe(() => {
      this.categoriaService.showMessage('Cliente salvo com sucesso', false);
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.formCategoria.get(field).valid && this.formCategoria.get(field).touched) ||
      (this.formCategoria.get(field).untouched && this.formSubmitAttempt) ||
      (this.formCategoria.get(field).errors)
    );
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formCategoria.controls;
  }


}

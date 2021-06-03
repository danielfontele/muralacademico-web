import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CursoDto } from 'src/app/model/curso/curso-dto';
import { CursoService } from '../curso.service';
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
  selector: 'app-curso-cadastrar',
  templateUrl: './curso-cadastrar.component.html',
  styleUrls: ['./curso-cadastrar.component.css']
})
export class CursoCadastrarComponent implements OnInit {

  constructor(
    private cursoService: CursoService,
    private fb: FormBuilder
  ) { }

  formCurso: FormGroup;
  formSubmitAttempt: boolean;
  curso: CursoDto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.formCurso = this.fb.group({
      id: [],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      versao: []
    });
    this.formCurso.controls['id'].disable();
    this.formCurso.controls['versao'].disable();
    this.formCurso.controls['id'].setValue("???");
    this.formCurso.controls['versao'].setValue(1);
  }

  onSubmit(): void {
    this.curso = this.formCurso.value;
    this.curso.versao = 1;
    this.cursoService.save(this.curso).subscribe(() => {
      this.cursoService.showMessage('Cliente salvo com sucesso', false);
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.formCurso.get(field).valid && this.formCurso.get(field).touched) ||
      (this.formCurso.get(field).untouched && this.formSubmitAttempt) ||
      (this.formCurso.get(field).errors)
    );
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formCurso.controls;
  }


}

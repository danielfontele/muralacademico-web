import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { CursoDto } from '../../model/curso/curso-dto';
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
  selector: 'app-curso-editar',
  templateUrl: './curso-editar.component.html',
  styleUrls: ['./curso-editar.component.css']
})
export class CursoEditarComponent implements OnInit {

  constructor(
    private cursoService: CursoService,
    private fb: FormBuilder
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'versao'];

  cursos: CursoDto[];

  dataSource;

  ngOnInit(): void {
    this.cursoService.list().subscribe(dados => {
      this.cursos = dados;
      this.dataSource = this.cursos;
    });
    this.formCurso = this.fb.group({
      id: [],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      versao: []
    });
    this.formCurso.controls['id'].disable();
    this.formCurso.controls['versao'].disable();
  }

  selectedRow(row: CursoDto) {
    this.formCurso.controls['id'].setValue(row.id);
    this.formCurso.controls['versao'].setValue(row.versao + 1);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formCurso: FormGroup;
  formSubmitAttempt: boolean;
  curso: CursoDto;
  matcher = new MyErrorStateMatcher();

  onSubmit(): void {
    this.curso = this.formCurso.getRawValue();
    this.cursoService.edit(this.curso).subscribe(() => {
      this.cursoService.showMessage('Cliente editado com sucesso', false);
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

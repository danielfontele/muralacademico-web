import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { CategoriaDto } from '../../model/categoria/categoria-dto';
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
  selector: 'app-categoria-deletar',
  templateUrl: './categoria-deletar.component.html',
  styleUrls: ['./categoria-deletar.component.css']
})
export class CategoriaDeletarComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService,
    private fb: FormBuilder
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'versao'];

  categorias: CategoriaDto[];

  dataSource;

  ngOnInit(): void {
    this.categoriaService.list().subscribe(dados => {
      this.categorias = dados;
      this.dataSource = this.categorias;
    });
    this.formCategoria = this.fb.group({
      id: [],
      nome: [],
      versao: []
    });
    this.formCategoria.controls['id'].disable();
    this.formCategoria.controls['nome'].disable();
    this.formCategoria.controls['versao'].disable();
  }

  selectedRow(row: CategoriaDto) {
    this.formCategoria.controls['id'].setValue(row.id);
    this.formCategoria.controls['nome'].setValue(row.nome);
    this.formCategoria.controls['versao'].setValue(row.versao);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formCategoria: FormGroup;
  formSubmitAttempt: boolean;
  categoria: CategoriaDto;
  matcher = new MyErrorStateMatcher();

  onSubmit(): void {
    this.categoria = this.formCategoria.getRawValue();
    this.categoriaService.delete(this.categoria.id);
    this.categoriaService.list().subscribe(dados => {
      this.categorias = dados;
      this.dataSource = this.categorias;
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

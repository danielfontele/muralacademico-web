import { Component, OnInit } from '@angular/core';
import { PalestranteService } from '../palestrante.service';
import { PalestranteDto } from '../../model/palestrante/palestrante-dto';
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
  selector: 'app-palestrante-deletar',
  templateUrl: './palestrante-deletar.component.html',
  styleUrls: ['./palestrante-deletar.component.css']
})
export class PalestranteDeletarComponent implements OnInit {

  constructor(
    private palestranteService: PalestranteService,
    private fb: FormBuilder
  ) { }

  displayedColumns: string[] = ['id', 'usuario', 'senha', 'versao'];

  palestrantes: PalestranteDto[];

  dataSource;

  ngOnInit(): void {
    this.palestranteService.list().subscribe(dados => {
      this.palestrantes = dados;
      this.dataSource = this.palestrantes;
    });
    this.formPalestrante = this.fb.group({
      id: [],
      usuario: [],
      senha: [],
      versao: []
    });
    this.formPalestrante.controls['id'].disable();
    this.formPalestrante.controls['usuario'].disable();
    this.formPalestrante.controls['senha'].disable();
    this.formPalestrante.controls['versao'].disable();
  }

  selectedRow(row: PalestranteDto) {
    this.formPalestrante.controls['id'].setValue(row.id);
    this.formPalestrante.controls['usuario'].setValue(row.usuario);
    this.formPalestrante.controls['senha'].setValue(row.senha);
    this.formPalestrante.controls['versao'].setValue(row.versao);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formPalestrante: FormGroup;
  formSubmitAttempt: boolean;
  palestrante: PalestranteDto;
  matcher = new MyErrorStateMatcher();

  onSubmit(): void {
    this.palestrante = this.formPalestrante.getRawValue();
    this.palestranteService.delete(this.palestrante.id);
    this.palestranteService.list().subscribe(dados => {
      this.palestrantes = dados;
      this.dataSource = this.palestrantes;
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.formPalestrante.get(field).valid && this.formPalestrante.get(field).touched) ||
      (this.formPalestrante.get(field).untouched && this.formSubmitAttempt) ||
      (this.formPalestrante.get(field).errors)
    );
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formPalestrante.controls;
  }
}

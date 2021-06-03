import { Component, OnInit } from '@angular/core';
import { TelefoneService } from '../telefone.service';
import { TelefoneDto } from '../../model/telefone/telefone-dto';
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
  selector: 'app-telefone-editar',
  templateUrl: './telefone-editar.component.html',
  styleUrls: ['./telefone-editar.component.css']
})
export class TelefoneEditarComponent implements OnInit {

  constructor(
    private telefoneService: TelefoneService,
    private fb: FormBuilder
  ) { }

  displayedColumns: string[] = ['id', 'codigoArea', 'ddd', 'numero', 'tipo', 'versao'];

  telefones: TelefoneDto[];

  dataSource;

  ngOnInit(): void {
    this.telefoneService.list().subscribe(dados => {
      this.telefones = dados;
      this.dataSource = this.telefones;
    });
    this.formTelefone = this.fb.group({
      id: [],
      codigoArea: ['', [Validators.required]],
      ddd: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      versao: []
    });
    this.formTelefone.controls['id'].disable();
    this.formTelefone.controls['versao'].disable();
  }

  selectedRow(row: TelefoneDto) {
    this.formTelefone.controls['id'].setValue(row.id);
    this.formTelefone.controls['versao'].setValue(row.versao + 1);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formTelefone: FormGroup;
  formSubmitAttempt: boolean;
  telefone: TelefoneDto;
  matcher = new MyErrorStateMatcher();

  onSubmit(): void {
    this.telefone = this.formTelefone.getRawValue();
    this.telefoneService.edit(this.telefone).subscribe(() => {
      this.telefoneService.showMessage('Cliente editado com sucesso', false);
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.formTelefone.get(field).valid && this.formTelefone.get(field).touched) ||
      (this.formTelefone.get(field).untouched && this.formSubmitAttempt) ||
      (this.formTelefone.get(field).errors)
    );
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formTelefone.controls;
  }

}

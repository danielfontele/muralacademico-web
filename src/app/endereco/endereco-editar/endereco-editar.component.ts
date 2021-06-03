import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { EnderecoDto } from '../../model/endereco/endereco-dto';
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
  selector: 'app-endereco-editar',
  templateUrl: './endereco-editar.component.html',
  styleUrls: ['./endereco-editar.component.css']
})
export class EnderecoEditarComponent implements OnInit {

  constructor(
    private enderecoService: EnderecoService,
    private fb: FormBuilder
  ) { }

  displayedColumns: string[] = ['id', 'cep', 'rua', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'versao'];

  enderecos: EnderecoDto[];

  dataSource;

  ngOnInit(): void {
    this.enderecoService.list().subscribe(dados => {
      this.enderecos = dados;
      this.dataSource = this.enderecos;
    });
    this.formEndereco = this.fb.group({
      id: [],
      cep: ['', [Validators.required, Validators.minLength(8)]],
      rua: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      versao: []
    });
    this.formEndereco.controls['id'].disable();
    this.formEndereco.controls['versao'].disable();
  }

  selectedRow(row: EnderecoDto) {
    this.formEndereco.controls['id'].setValue(row.id);
    this.formEndereco.controls['versao'].setValue(row.versao + 1);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formEndereco: FormGroup;
  formSubmitAttempt: boolean;
  endereco: EnderecoDto;
  matcher = new MyErrorStateMatcher();

  onSubmit(): void {
    this.endereco = this.formEndereco.getRawValue();
    this.enderecoService.edit(this.endereco).subscribe(() => {
      this.enderecoService.showMessage('Cliente editado com sucesso', false);
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.formEndereco.get(field).valid && this.formEndereco.get(field).touched) ||
      (this.formEndereco.get(field).untouched && this.formSubmitAttempt) ||
      (this.formEndereco.get(field).errors)
    );
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formEndereco.controls;
  }

}

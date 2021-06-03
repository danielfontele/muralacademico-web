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
  selector: 'app-endereco-deletar',
  templateUrl: './endereco-deletar.component.html',
  styleUrls: ['./endereco-deletar.component.css']
})
export class EnderecoDeletarComponent implements OnInit {

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
      nome: [],
      versao: []
    });
    this.formEndereco.controls['id'].disable();
    this.formEndereco.controls['cep'].disable();
    this.formEndereco.controls['rua'].disable();
    this.formEndereco.controls['numero'].disable();
    this.formEndereco.controls['complemento'].disable();
    this.formEndereco.controls['bairro'].disable();
    this.formEndereco.controls['cidade'].disable();
    this.formEndereco.controls['estado'].disable();
    this.formEndereco.controls['versao'].disable();
  }

  selectedRow(row: EnderecoDto) {
    this.formEndereco.controls['id'].setValue(row.id);
    this.formEndereco.controls['cep'].setValue(row.cep);
    this.formEndereco.controls['rua'].setValue(row.rua);
    this.formEndereco.controls['numero'].setValue(row.numero);
    this.formEndereco.controls['complemento'].setValue(row.complemento);
    this.formEndereco.controls['bairro'].setValue(row.bairro);
    this.formEndereco.controls['cidade'].setValue(row.cidade);
    this.formEndereco.controls['estado'].setValue(row.estado);
    this.formEndereco.controls['versao'].setValue(row.versao);
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
    this.enderecoService.delete(this.endereco.id);
    this.enderecoService.list().subscribe(dados => {
      this.enderecos = dados;
      this.dataSource = this.enderecos;
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

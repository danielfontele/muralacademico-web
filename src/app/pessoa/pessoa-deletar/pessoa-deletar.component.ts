import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { PessoaDto } from '../../model/pessoa/pessoa-dto';
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
  selector: 'app-pessoa-deletar',
  templateUrl: './pessoa-deletar.component.html',
  styleUrls: ['./pessoa-deletar.component.css']
})
export class PessoaDeletarComponent implements OnInit {

  constructor(
    private pessoaService: PessoaService,
    private fb: FormBuilder
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'versao'];

  pessoas: PessoaDto[];

  dataSource;

  ngOnInit(): void {
    this.pessoaService.list().subscribe(dados => {
      this.pessoas = dados;
      this.dataSource = this.pessoas;
    });
    this.formPessoa = this.fb.group({
      id: [],
      nome: [],
      cfp: [],
      email: [],
      versao: []
    });
    this.formPessoa.controls['id'].disable();
    this.formPessoa.controls['nome'].disable();
    this.formPessoa.controls['cpf'].disable();
    this.formPessoa.controls['email'].disable();
    this.formPessoa.controls['versao'].disable();
  }

  selectedRow(row: PessoaDto) {
    this.formPessoa.controls['id'].setValue(row.id);
    this.formPessoa.controls['nome'].setValue(row.nome);
    this.formPessoa.controls['cpf'].setValue(row.cpf);
    this.formPessoa.controls['email'].setValue(row.email);
    this.formPessoa.controls['versao'].setValue(row.versao);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formPessoa: FormGroup;
  formSubmitAttempt: boolean;
  pessoa: PessoaDto;
  matcher = new MyErrorStateMatcher();

  onSubmit(): void {
    this.pessoa = this.formPessoa.getRawValue();
    this.pessoaService.delete(this.pessoa.id);
    this.pessoaService.list().subscribe(dados => {
      this.pessoas = dados;
      this.dataSource = this.pessoas;
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.formPessoa.get(field).valid && this.formPessoa.get(field).touched) ||
      (this.formPessoa.get(field).untouched && this.formSubmitAttempt) ||
      (this.formPessoa.get(field).errors)
    );
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formPessoa.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PessoaDto } from 'src/app/model/pessoa/pessoa-dto';
import { PessoaService } from '../pessoa.service';
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
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.component.html',
  styleUrls: ['./pessoa-cadastrar.component.css']
})
export class PessoaCadastrarComponent implements OnInit {

  constructor(
    private pessoaService: PessoaService,
    private fb: FormBuilder
  ) { }

  formPessoa: FormGroup;
  formSubmitAttempt: boolean;
  pessoa: PessoaDto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.formPessoa = this.fb.group({
      id: [],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      versao: []
    });
    this.formPessoa.controls['id'].disable();
    this.formPessoa.controls['versao'].disable();
    this.formPessoa.controls['id'].setValue("???");
    this.formPessoa.controls['versao'].setValue(1);
  }

  onSubmit(): void {
    this.pessoa = this.formPessoa.value;
    this.pessoa.versao = 1;
    this.pessoaService.save(this.pessoa).subscribe(() => {
      this.pessoaService.showMessage('Cliente salvo com sucesso', false);
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

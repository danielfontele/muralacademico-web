import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { EnderecoDto } from 'src/app/model/endereco/endereco-dto';
import { EnderecoService } from '../endereco.service';
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
  selector: 'app-endereco-cadastrar',
  templateUrl: './endereco-cadastrar.component.html',
  styleUrls: ['./endereco-cadastrar.component.css']
})
export class EnderecoCadastrarComponent implements OnInit {

  constructor(
    private enderecoService: EnderecoService,
    private fb: FormBuilder
  ) { }

  formEndereco: FormGroup;
  formSubmitAttempt: boolean;
  endereco: EnderecoDto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.formEndereco = this.fb.group({
      id: [],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      versao: []
    });
    this.formEndereco.controls['id'].disable();
    this.formEndereco.controls['versao'].disable();
    this.formEndereco.controls['id'].setValue("???");
    this.formEndereco.controls['versao'].setValue(1);
  }

  onSubmit(): void {
    this.endereco = this.formEndereco.value;
    this.endereco.versao = 1;
    this.enderecoService.save(this.endereco).subscribe(() => {
      this.enderecoService.showMessage('Cliente salvo com sucesso', false);
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

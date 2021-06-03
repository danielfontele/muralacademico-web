import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TelefoneDto } from 'src/app/model/telefone/telefone-dto';
import { TelefoneService } from '../telefone.service';
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
  selector: 'app-telefone-cadastrar',
  templateUrl: './telefone-cadastrar.component.html',
  styleUrls: ['./telefone-cadastrar.component.css']
})
export class TelefoneCadastrarComponent implements OnInit {

  constructor(
    private telefoneService: TelefoneService,
    private fb: FormBuilder
  ) { }

  formTelefone: FormGroup;
  formSubmitAttempt: boolean;
  telefone: TelefoneDto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
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
    this.formTelefone.controls['id'].setValue("???");
    this.formTelefone.controls['versao'].setValue(1);
  }

  onSubmit(): void {
    this.telefone = this.formTelefone.value;
    this.telefone.versao = 1;
    this.telefoneService.save(this.telefone).subscribe(() => {
      this.telefoneService.showMessage('Cliente salvo com sucesso', false);
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

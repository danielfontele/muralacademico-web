import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PalestranteDto } from 'src/app/model/palestrante/palestrante-dto';
import { PalestranteService } from '../palestrante.service';
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
  selector: 'app-palestrante-cadastrar',
  templateUrl: './palestrante-cadastrar.component.html',
  styleUrls: ['./palestrante-cadastrar.component.css']
})
export class PalestranteCadastrarComponent implements OnInit {

  constructor(
    private palestranteService: PalestranteService,
    private fb: FormBuilder
  ) { }

  formPalestrante: FormGroup;
  formSubmitAttempt: boolean;
  palestrante: PalestranteDto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.formPalestrante = this.fb.group({
      id: [],
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      senha: ['', [Validators.required, Validators.minLength(3)]],
      versao: []
    });
    this.formPalestrante.controls['id'].disable();
    this.formPalestrante.controls['versao'].disable();
    this.formPalestrante.controls['id'].setValue("???");
    this.formPalestrante.controls['versao'].setValue(1);
  }

  onSubmit(): void {
    this.palestrante = this.formPalestrante.value;
    this.palestrante.versao = 1;
    this.palestranteService.save(this.palestrante).subscribe(() => {
      this.palestranteService.showMessage('Cliente salvo com sucesso', false);
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

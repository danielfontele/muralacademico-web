import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PostagemDto } from 'src/app/model/postagem/postagem-dto';
import { PostagemService } from '../postagem.service';
import { DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-postagem-cadastrar',
  templateUrl: './postagem-cadastrar.component.html',
  styleUrls: ['./postagem-cadastrar.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class PostagemCadastrarComponent implements OnInit {

  constructor(
    private postagemService: PostagemService,
    private fb: FormBuilder
  ) { }

  formPostagem: FormGroup;
  formSubmitAttempt: boolean;
  postagem: PostagemDto;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.formPostagem = this.fb.group({
      id: [],
      conteudo: ['', [Validators.required]],
      data: ['', [Validators.required]],
      nivel: ['', [Validators.required]],
      versao: []
    });
    this.formPostagem.controls['id'].disable();
    this.formPostagem.controls['versao'].disable();
    this.formPostagem.controls['id'].setValue("???");
    this.formPostagem.controls['versao'].setValue(1);
  }

  onSubmit(): void {
    this.postagem = this.formPostagem.value;
    this.postagem.versao = 1;
    this.postagemService.save(this.postagem).subscribe(() => {
      this.postagemService.showMessage('Cliente salvo com sucesso', false);
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.formPostagem.get(field).valid && this.formPostagem.get(field).touched) ||
      (this.formPostagem.get(field).untouched && this.formSubmitAttempt) ||
      (this.formPostagem.get(field).errors)
    );
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return false;
  }

  get getControl() {
    return this.formPostagem.controls;
  }


}

import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../postagem.service';
import { PostagemDto } from '../../model/postagem/postagem-dto';
import { DateAdapter, ErrorStateMatcher, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-postagem-editar',
  templateUrl: './postagem-editar.component.html',
  styleUrls: ['./postagem-editar.component.css'],
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
export class PostagemEditarComponent implements OnInit {

  constructor(
    private postagemService: PostagemService,
    private fb: FormBuilder
  ) { }

  displayedColumns: string[] = ['id', 'conteudo', 'data', 'nivel', 'versao'];

  postagems: PostagemDto[];

  dataSource;

  ngOnInit(): void {
    this.postagemService.list().subscribe(dados => {
      this.postagems = dados;
      this.dataSource = this.postagems;
    });
    this.formPostagem = this.fb.group({
      id: [],
      conteudo: ['', [Validators.required]],
      data: ['', [Validators.required]],
      nivel: ['', [Validators.required]],
      versao: []
    });
    this.formPostagem.controls['id'].disable();
    this.formPostagem.controls['versao'].disable();
  }

  selectedRow(row: PostagemDto) {
    this.formPostagem.controls['id'].setValue(row.id);
    this.formPostagem.controls['conteudo'].setValue(row.conteudo);
    this.formPostagem.controls['data'].setValue(row.data);
    this.formPostagem.controls['nivel'].setValue(row.nivel);
    this.formPostagem.controls['versao'].setValue(row.versao + 1);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  formPostagem: FormGroup;
  formSubmitAttempt: boolean;
  postagem: PostagemDto;
  matcher = new MyErrorStateMatcher();

  onSubmit(): void {
    this.postagem = this.formPostagem.getRawValue();
    this.postagemService.edit(this.postagem).subscribe(() => {
      this.postagemService.showMessage('Cliente editado com sucesso', false);
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NavbarModule } from './navbar/navbar.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoriaModule } from './categoria/categoria.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { LoginModule } from './login/login.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CursoModule } from './curso/curso.module';
import { EnderecoModule } from './endereco/endereco.module';
import { PalestranteModule } from './palestrante/palestrante.module';
import { PostagemModule } from './postagem/postagem.module';
import { TelefoneModule } from './telefone/telefone.module';
import { PessoaModule } from './pessoa/pessoa.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CategoriaModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    NavbarModule,
    LoginModule,
    SidenavModule,
    UsuarioModule,
    CursoModule,
    EnderecoModule,
    PalestranteModule,
    PessoaModule,
    PostagemModule,
    TelefoneModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

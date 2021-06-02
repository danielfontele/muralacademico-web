import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriaModule } from './categoria/categoria.module';
import { HttpClientModule } from '@angular/common/http';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NavbarModule } from './navbar/navbar.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginModule } from './login/login.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { UsuarioModule } from './usuario/usuario.module';

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
    UsuarioModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

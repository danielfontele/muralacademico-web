import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private router: Router,
    private sidenavService: SidenavService,
  ) { }

  ngOnInit(): void {
  }

  getShowing() : boolean {
    return this.sidenavService.isShowing;
  }

  goCategoria() {
    this.router.navigate(['categoria']);
  }

  goCurso() {
    this.router.navigate(['curso']);
  }

  goEndereco() {
    this.router.navigate(['endereco']);
  }

  goPalestrante() {
    this.router.navigate(['palestrante']);
  }

  goPessoa() {
    this.router.navigate(['pessoa']);
  }

  goPostagem() {
    this.router.navigate(['postagem']);
  }

  goTelefone() {
    this.router.navigate(['telefone']);
  }

  goUsuario() {
    this.router.navigate(['usuario']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

export const routes: Routes = []

@Component({
  selector: 'app-usuario-main',
  templateUrl: './usuario-main.component.html',
  styleUrls: ['./usuario-main.component.css']
})
export class UsuarioMainComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getSelectedButton()   {
    return this.router.url;
  }

}

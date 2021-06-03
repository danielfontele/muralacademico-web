import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

export const routes: Routes = []

@Component({
  selector: 'app-telefone-main',
  templateUrl: './telefone-main.component.html',
  styleUrls: ['./telefone-main.component.css']
})
export class TelefoneMainComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getSelectedButton()   {
    return this.router.url;
  }
}

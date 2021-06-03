import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

export const routes: Routes = []

@Component({
  selector: 'app-palestrante-main',
  templateUrl: './palestrante-main.component.html',
  styleUrls: ['./palestrante-main.component.css']
})
export class PalestranteMainComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getSelectedButton()   {
    return this.router.url;
  }
}

import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

export const routes: Routes = []

@Component({
  selector: 'app-categoria-main',
  templateUrl: './categoria-main.component.html',
  styleUrls: ['./categoria-main.component.css']
})
export class CategoriaMainComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getSelectedButton()   {
    return this.router.url;
  }
}

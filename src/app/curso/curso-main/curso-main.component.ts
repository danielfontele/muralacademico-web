import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

export const routes: Routes = []

@Component({
  selector: 'app-curso-main',
  templateUrl: './curso-main.component.html',
  styleUrls: ['./curso-main.component.css']
})
export class CursoMainComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getSelectedButton()   {
    return this.router.url;
  }
}

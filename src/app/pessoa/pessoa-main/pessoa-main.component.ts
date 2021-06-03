import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

export const routes: Routes = []

@Component({
  selector: 'app-pessoa-main',
  templateUrl: './pessoa-main.component.html',
  styleUrls: ['./pessoa-main.component.css']
})
export class PessoaMainComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getSelectedButton()   {
    return this.router.url;
  }
}

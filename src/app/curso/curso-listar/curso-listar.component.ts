import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { CursoDto } from '../../model/curso/curso-dto';
@Component({
  selector: 'app-curso-listar',
  templateUrl: './curso-listar.component.html',
  styleUrls: ['./curso-listar.component.css']
})
export class CursoListarComponent implements OnInit {

  constructor(
    private cursoService: CursoService,
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'versao'];

  cursos: CursoDto[];

  dataSource;

  ngOnInit(): void {
    this.cursoService.list().subscribe(dados => {
      this.cursos = dados;
      this.dataSource = this.cursos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
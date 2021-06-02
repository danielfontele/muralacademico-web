import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { CategoriaDto } from '../../model/categoria/categoria-dto';
@Component({
  selector: 'app-categoria-listar',
  templateUrl: './categoria-listar.component.html',
  styleUrls: ['./categoria-listar.component.css']
})
export class CategoriaListarComponent implements OnInit {

  constructor(
    private categoriaService: CategoriaService,
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'versao'];

  categorias: CategoriaDto[];

  dataSource;

  ngOnInit(): void {
    this.categoriaService.list().subscribe(dados => {
      this.categorias = dados;
      this.dataSource = this.categorias;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
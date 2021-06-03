import { Component, OnInit } from '@angular/core';
import { PalestranteService } from '../palestrante.service';
import { PalestranteDto } from '../../model/palestrante/palestrante-dto';
@Component({
  selector: 'app-palestrante-listar',
  templateUrl: './palestrante-listar.component.html',
  styleUrls: ['./palestrante-listar.component.css']
})
export class PalestranteListarComponent implements OnInit {

  constructor(
    private palestranteService: PalestranteService,
  ) { }

  displayedColumns: string[] = ['id', 'usuario', 'senha', 'versao'];

  palestrantes: PalestranteDto[];

  dataSource;

  ngOnInit(): void {
    this.palestranteService.list().subscribe(dados => {
      this.palestrantes = dados;
      this.dataSource = this.palestrantes;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
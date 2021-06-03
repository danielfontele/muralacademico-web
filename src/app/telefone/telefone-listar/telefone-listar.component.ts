import { Component, OnInit } from '@angular/core';
import { TelefoneService } from '../telefone.service';
import { TelefoneDto } from '../../model/telefone/telefone-dto';
@Component({
  selector: 'app-telefone-listar',
  templateUrl: './telefone-listar.component.html',
  styleUrls: ['./telefone-listar.component.css']
})
export class TelefoneListarComponent implements OnInit {

  constructor(
    private telefoneService: TelefoneService,
  ) { }

  displayedColumns: string[] = ['id', 'codigoArea', 'ddd', 'numero', 'tipo', 'versao'];

  telefones: TelefoneDto[];

  dataSource;

  ngOnInit(): void {
    this.telefoneService.list().subscribe(dados => {
      this.telefones = dados;
      this.dataSource = this.telefones;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
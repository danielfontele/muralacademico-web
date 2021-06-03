import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../endereco.service';
import { EnderecoDto } from '../../model/endereco/endereco-dto';
@Component({
  selector: 'app-endereco-listar',
  templateUrl: './endereco-listar.component.html',
  styleUrls: ['./endereco-listar.component.css']
})
export class EnderecoListarComponent implements OnInit {

  constructor(
    private enderecoService: EnderecoService,
  ) { }

  displayedColumns: string[] = ['id', 'cep', 'rua', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'versao'];

  enderecos: EnderecoDto[];

  dataSource;

  ngOnInit(): void {
    this.enderecoService.list().subscribe(dados => {
      this.enderecos = dados;
      this.dataSource = this.enderecos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
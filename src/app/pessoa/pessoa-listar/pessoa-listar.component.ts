import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { PessoaDto } from '../../model/pessoa/pessoa-dto';
@Component({
  selector: 'app-pessoa-listar',
  templateUrl: './pessoa-listar.component.html',
  styleUrls: ['./pessoa-listar.component.css']
})
export class PessoaListarComponent implements OnInit {

  constructor(
    private pessoaService: PessoaService,
  ) { }

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'email', 'versao'];

  pessoas: PessoaDto[];

  dataSource;

  ngOnInit(): void {
    this.pessoaService.list().subscribe(dados => {
      this.pessoas = dados;
      this.dataSource = this.pessoas;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
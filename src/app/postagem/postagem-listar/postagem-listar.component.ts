import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../postagem.service';
import { PostagemDto } from '../../model/postagem/postagem-dto';

@Component({
  selector: 'app-postagem-listar',
  templateUrl: './postagem-listar.component.html',
  styleUrls: ['./postagem-listar.component.css']
})
export class PostagemListarComponent implements OnInit {

  constructor(
    private postagemService: PostagemService,
  ) { }

  displayedColumns: string[] = ['id', 'conteudo', 'data', 'nivel', 'versao'];

  postagems: PostagemDto[];

  dataSource;

  ngOnInit(): void {
    this.postagemService.list().subscribe(dados => {
      this.postagems = dados;
      this.dataSource = this.postagems;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
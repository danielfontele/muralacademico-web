import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { UsuarioDto } from '../../model/usuario/usuario-dto';
@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  displayedColumns: string[] = ['id', 'usuario', 'senha', 'versao'];

  usuarios: UsuarioDto[];

  dataSource;

  ngOnInit(): void {
    this.usuarioService.list().subscribe(dados => {
      this.usuarios = dados;
      this.dataSource = this.usuarios;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
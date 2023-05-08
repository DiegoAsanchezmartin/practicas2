import { Component, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuarios: any[] = [];
  usuarioSeleccionado: any;

  @Output() usuarioSeleccionadoEmitter = new EventEmitter<any>();
  @Output() prueba = new EventEmitter<any>();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getUsers().subscribe(res => {
      console.log('usuarios', res);
      this.usuarios = res;
    });
  }

  getUsers() {
    return this.http.get('assets/files/usuarios.json').pipe(
      map((res: any) => {
        return res.usuario;
      })
    );
  }

  verDetalle(usuario: any) {
    this.usuarioSeleccionado = usuario;
    console.log('usuario', usuario);
    this.router.navigate(['/home']);
    this.usuarioSeleccionadoEmitter.emit(this.usuarioSeleccionado['usuario']);
 this.prueba.emit('prueba de comunicacion');
    console.log('evento emitido:', this.usuarioSeleccionado);


  }

}

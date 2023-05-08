import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

})
export class HomePage implements OnInit {

  @Input() usuarioSeleccionado: any;
  @Input()prueba: any;

  constructor() {
console.log('usuario en home:', this.usuarioSeleccionado);
console.log('prueba de comunicacion:', this.prueba);
  }

  ngOnInit() {


  }

  ngOnChanges(changes: SimpleChanges) {
      console.log('usuario seleccionado en hijo:', changes['usuarioSeleccionado'].currentValue);

  }

}

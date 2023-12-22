import { Component, OnInit } from '@angular/core';
import { FormularioProductoComponent } from '../formulario-producto/formulario-producto.component';
import { ListaDeProductosComponent } from '../lista-de-productos/lista-de-productos.component';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.scss'],
  standalone: true,
  imports: [FormularioProductoComponent, ListaDeProductosComponent]
})
export class ListaDeComprasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}

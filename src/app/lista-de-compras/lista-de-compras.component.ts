import { Component, OnInit } from '@angular/core';
import { FormularioProductoComponent } from '../formulario-producto/formulario-producto.component';
import { ListaDeProductosComponent } from '../lista-de-productos/lista-de-productos.component';
import { Producto } from '../modelo/producto';
import { ProductoService } from '../servicios/producto.service';
import { ConfiguracionService } from '../servicios/configuracion.service';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.scss'],
  standalone: true,
  imports: [FormularioProductoComponent, ListaDeProductosComponent]
})
export class ListaDeComprasComponent  implements OnInit {

  productos:Producto[] = []
  ordenarAlfabeticamente:boolean = false 

  constructor(
    private productoService:ProductoService,
    private configuracionService:ConfiguracionService
  ) { }

  ngOnInit() {
    console.log("ListaDeComprasComponent::ngOnInit")    
  }

  ionViewWillEnter():void {
    console.log("ListaDeComprasComponent::ionViewWillEnter")
    this.actualizar()
  }

  async actualizar() {
    console.log("actualizando...")
    this.ordenarAlfabeticamente = await this.configuracionService.ordenarRegistros()
    if( this.ordenarAlfabeticamente ) {
      this.productos = this.productoService.getProductosOrdenadosAlfabeticamente() 
    } else {
      this.productos = this.productoService.getProductos() 
    }
  }

  agregarProducto(productoStr: string) {
    const id = 0
    const p = new Producto(id, productoStr, false)
    this.productoService.agregarProducto(p)
    this.actualizar()
  }

  onProductoChange(p: Producto) {
    this.productoService.editar(p)
    this.actualizar() 
  }
}

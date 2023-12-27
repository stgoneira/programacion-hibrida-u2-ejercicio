import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormularioProductoComponent } from '../formulario-producto/formulario-producto.component';
import { ListaDeProductosComponent } from '../lista-de-productos/lista-de-productos.component';
import { Producto } from '../modelo/producto';
import { ProductoService } from '../servicios/producto.service';
import { ConfiguracionService } from '../servicios/configuracion.service';
import { DbService } from '../servicios/db.service';

@Component({
  selector: 'app-lista-de-compras',
  templateUrl: './lista-de-compras.component.html',
  styleUrls: ['./lista-de-compras.component.scss'],
  standalone: true,
  imports: [FormularioProductoComponent, ListaDeProductosComponent]
})
export class ListaDeComprasComponent  implements OnInit, OnDestroy {

  productos:Producto[] = []
  ordenarAlfabeticamente:boolean = false 

  constructor(
    private dbService:DbService,
    private productoService:ProductoService,
    private configuracionService:ConfiguracionService
  ) { }
  
  async ngOnInit() {
    console.log("ListaDeComprasComponent::ngOnInit - DbService::iniciarPlugin()")    
    await this.dbService.iniciarPlugin() 
    await this.actualizar() 
  }

  async ngOnDestroy() {
    console.log("ListaDeComprasComponent::ngOnDestroy")    
    await this.dbService.cerrarConexion() 
  }

  async ionViewWillEnter() {
    console.log("ListaDeComprasComponent::ionViewWillEnter")
    if( this.dbService.iniciado ) {
      console.log("dbService INICIADO -- actualizar()")
      await this.actualizar()    
    } else {
      console.log("dbService AUN NO INICIADO")
    }    
  }

  async actualizar() {
    console.log("actualizando...")
    this.ordenarAlfabeticamente = await this.configuracionService.ordenarRegistros()
    if( this.ordenarAlfabeticamente ) {
      this.productos = await this.productoService.getProductosOrdenadosAlfabeticamente() 
    } else {
      this.productos = await this.productoService.getProductos() 
    }
  }

  async agregarProducto(productoStr: string) {    
    const p:Producto = {
      nombre: productoStr,
      comprado: false
    }
    await this.productoService.agregarProducto(p)
    await this.actualizar()
  }

  async onProductoChange(p: Producto) {
    await this.productoService.editar(p)
    await this.actualizar() 
  }
}

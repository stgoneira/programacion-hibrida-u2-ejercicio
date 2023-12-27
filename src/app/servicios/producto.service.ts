import { Injectable } from '@angular/core';
import { Producto } from '../modelo/producto';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private dbService:DbService
  ) { }

  async agregarProducto(producto:Producto) {
    this.dbService.insertar(producto)    
  }

  async getProductos():Promise<Producto[]> {
    return this.dbService.obtenerTodos()
  }
  
  async getProductosOrdenadosAlfabeticamente():Promise<Producto[]> {
    const productos = await this.getProductos()
    return productos?.sort((a,b) => a?.nombre?.localeCompare(b?.nombre))
  }

  async editar(producto:Producto) {
    await this.dbService.actualizar(producto)
  }

  async eliminar(producto:Producto) {
    if( producto.id != undefined && producto.id > 0 ) {
      await this.dbService.eliminar(producto.id)
    }    
  }
}

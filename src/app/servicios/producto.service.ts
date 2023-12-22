import { Injectable } from '@angular/core';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private _productos:Producto[] = [
    new Producto(1, "Pan", false)
    ,new Producto(2, "Queso", true)
    ,new Producto(3, "Leche", false)
  ] 

  constructor() { }

  agregarProducto(producto:Producto) {
    producto.id = Date.now() 
    this._productos.push(producto)
  }

  getProductos():Producto[] {
    console.dir(this._productos)
    return this._productos
  }
  
  getProductosOrdenadosAlfabeticamente() {
    return this._productos.slice().sort((a,b) => a.nombre.localeCompare(b.nombre))
  }

  private _buscarIndice(producto:Producto):number {
    return this._productos.findIndex(prod => prod.id === producto.id)
  }

  editar(producto:Producto) {
    const indice = this._buscarIndice(producto)
    if( indice >= 0) {
      this._productos[indice] = producto
    }    
  }

  eliminar(producto:Producto) {
    const indice = this._buscarIndice(producto)
    if( indice >= 0) {
      this._productos.slice(indice, 1)
    }    
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private _ordenar:boolean = false 

  constructor() { }

  ordenarRegistros():boolean {
    return this._ordenar
  }

  setOrdenarRegistros(ordenar:boolean) {
    this._ordenar = ordenar
  }
}

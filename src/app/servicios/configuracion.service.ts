import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private ordenar:boolean = false 

  constructor() { }

  ordenarRegistros():boolean {
    return this.ordenar
  }
}

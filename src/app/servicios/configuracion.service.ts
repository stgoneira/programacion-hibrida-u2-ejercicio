import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {

  private readonly ORDENAR_ALFABETICAMENTE_KEY:string = "ORDENAR_ALFABETICAMENTE"

  constructor() { }

  async ordenarRegistros():Promise<boolean> {
    const resultado = await Preferences.get({key: this.ORDENAR_ALFABETICAMENTE_KEY})
    return resultado.value != null && resultado.value == "1"
  }

  async setOrdenarRegistros(ordenar:boolean) {
    await Preferences.set({
      key: this.ORDENAR_ALFABETICAMENTE_KEY,
      value: ordenar ? "1": "0"
    })
  }
}

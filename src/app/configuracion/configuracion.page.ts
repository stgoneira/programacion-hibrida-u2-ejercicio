import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToggleChangeEventDetail } from '@ionic/angular';
import { IonToggleCustomEvent } from '@ionic/core';
import { ConfiguracionService } from '../servicios/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {
  
  ordenarRegistrosAlfabeticamente:boolean = false 

  constructor(
    private configuracionService:ConfiguracionService
  ) { }

  async ngOnInit() {
    console.log("ConfiguracionPage::ngOnInit")
    this.ordenarRegistrosAlfabeticamente = await this.configuracionService.ordenarRegistros()
  }

  async onCambioEnConfiguracionDeOrden($event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>) {
    //const ordenar = $event.detail.checked        
    await this.configuracionService.setOrdenarRegistros(this.ordenarRegistrosAlfabeticamente)
  }
}

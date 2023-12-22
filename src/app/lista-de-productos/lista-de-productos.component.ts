import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import {IonList, IonItem, IonLabel, IonCheckbox, CheckboxChangeEventDetail} 
                          from '@ionic/angular/standalone'
import { Producto } from '../modelo/producto'
import { IonCheckboxCustomEvent } from '@ionic/core'

@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './lista-de-productos.component.html',
  styleUrls: ['./lista-de-productos.component.scss'],
  standalone: true,
  imports: [CommonModule, IonList, IonItem, IonLabel, IonCheckbox]
})
export class ListaDeProductosComponent  implements OnInit {

  @Input() productos:Producto[] = []
  @Output() onChange = new EventEmitter<Producto>()

  constructor() { }

  ngOnInit() {
    console.log("ListaDeProductosComponent::ngOnInit()")
  }

  ionViewWillEnter() {
    console.log("ListaDeProductosComponent::ionViewWillEnter()")
  }

  onCompradoChange(p:Producto, $event: IonCheckboxCustomEvent<CheckboxChangeEventDetail<any>>) {
    const comprado = $event.detail.checked 
    p.comprado = comprado 
    this.onChange.emit(p)
  }
}

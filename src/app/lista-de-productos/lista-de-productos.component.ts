import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {IonList, IonItem, IonLabel, IonCheckbox} 
                          from '@ionic/angular/standalone'
import { Producto } from '../modelo/producto'

@Component({
  selector: 'app-lista-de-productos',
  templateUrl: './lista-de-productos.component.html',
  styleUrls: ['./lista-de-productos.component.scss'],
  standalone: true,
  imports: [CommonModule, IonList, IonItem, IonLabel, IonCheckbox]
})
export class ListaDeProductosComponent  implements OnInit {

  productos:Producto[] = [
    new Producto("Arroz", false)
    ,new Producto("Salsa de Tomates", true)
    ,new Producto("Espirales", false)
    ,new Producto("Agua mineral", true)
  ]

  constructor() { }

  ngOnInit() {}

}

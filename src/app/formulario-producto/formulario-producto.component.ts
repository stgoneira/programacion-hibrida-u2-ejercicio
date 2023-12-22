import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { IonList, IonItem, IonInput, IonButton, IonIcon, IonText } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import { addCircleOutline } from 'ionicons/icons'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss'],
  standalone: true,
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton, IonIcon, IonText]
})
export class FormularioProductoComponent  implements OnInit {

  producto:string = ""
  @Output() onProductoAgregado = new EventEmitter<string>()

  constructor() { 
    addIcons({
      addCircleOutline
    })
  }

  ngOnInit() {}

  agregarProducto() {
    this.onProductoAgregado.emit(this.producto)
    this.producto = ""
  }
}

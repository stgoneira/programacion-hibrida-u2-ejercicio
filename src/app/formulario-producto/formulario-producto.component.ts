import { Component, OnInit } from '@angular/core'
import { IonList, IonItem, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons'
import { addCircleOutline } from 'ionicons/icons'

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonInput, IonButton, IonIcon]
})
export class FormularioProductoComponent  implements OnInit {

  constructor() { 
    addIcons({
      addCircleOutline
    })
  }

  ngOnInit() {}

}

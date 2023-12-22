import { Component } from '@angular/core';
import { IonButtons, IonButton, IonIcon, 
         IonHeader, IonToolbar, IonTitle, IonContent } 
                    from '@ionic/angular/standalone';
import { ListaDeComprasComponent } from '../lista-de-compras/lista-de-compras.component';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ListaDeComprasComponent, IonHeader, IonToolbar, IonTitle, IonContent, 
            IonButtons, IonButton, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({
      settingsOutline
    })
  }
}

import { Component, OnInit, ViewChild } from '@angular/core'
import { IonButtons, IonButton, IonIcon, 
         IonHeader, IonToolbar, IonTitle, IonContent } 
                    from '@ionic/angular/standalone'
import { ListaDeComprasComponent } from '../lista-de-compras/lista-de-compras.component'
import { addIcons } from 'ionicons'
import { settingsOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ListaDeComprasComponent, RouterModule, IonHeader, IonToolbar, IonTitle, IonContent, 
            IonButtons, IonButton, IonIcon],
})
export class HomePage implements OnInit {
  @ViewChild(ListaDeComprasComponent) listaDeComprasComponent!:ListaDeComprasComponent

  constructor() {
    addIcons({
      settingsOutline
    })
  }
  ngOnInit(): void {
    console.log("HomePage::ngOnInit")
  }
  ionViewWillEnter():void {
    console.log("HomePage::ionViewWillEnter")
    this.listaDeComprasComponent.ionViewWillEnter() 
  }
}

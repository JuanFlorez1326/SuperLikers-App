import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCheckbox, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoWhatsapp } from 'ionicons/icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonCheckbox, IonButton, IonIcon ]
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    addIcons({ logoWhatsapp })
  }

}

import { Component, inject, OnInit, signal } from '@angular/core';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/angular/standalone';
import { LoginService } from 'src/app/services/auth.service';
import { Participant } from 'src/app/interfaces/login-response.interface';
import { UserMenuComponent } from "../../components/user-menu/user-menu.component";
import { KpiCardComponent } from "../../components/kpi-card/kpi-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ RouterLink, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonList, IonItem, IonLabel, UserMenuComponent, KpiCardComponent],
})
export class HomePage implements OnInit {
  
  public loginService = inject(LoginService);
  public user = signal<Participant | null>(null);

  constructor() { }

  ngOnInit() {
    this.user.set(this.loginService.getUserInfo());
  }

}

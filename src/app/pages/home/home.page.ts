import { Component, inject, OnInit, signal } from '@angular/core';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { LoginService } from 'src/app/services/login.service';
import { Participant } from 'src/app/interfaces/login-response.interface';
import { UserMenuComponent } from "../../components/user-menu/user-menu.component";
import { KpiCardComponent } from "../../components/kpi-card/kpi-card.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar, UserMenuComponent, KpiCardComponent],
})
export class HomePage implements OnInit {
  private loginService = inject(LoginService);

  public user = signal<Participant | null>(null);

  constructor() { }

  ngOnInit() {
    this.user.set(this.loginService.getUserInfo());
    console.log('User info:', this.user());
  }

}

import { RouterLink } from '@angular/router';
import { LoginService } from 'src/app/services/auth.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Participant } from 'src/app/interfaces/login-response.interface';
import { KpiCardComponent } from "../../components/kpi-card/kpi-card.component";
import { UserMenuComponent } from "../../components/user-menu/user-menu.component";
import { SubmenuHomeComponent } from "../../components/submenu-home/submenu-home.component";
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

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ 
    RouterLink, 
    IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenu, 
    IonMenuButton, 
    IonTitle, 
    IonToolbar, 
    IonList, 
    IonItem, 
    IonLabel, 
    UserMenuComponent, 
    KpiCardComponent,
    SubmenuHomeComponent
  ],
})
export class HomePage implements OnInit {
  
  public loginService = inject(LoginService);
  public user = signal<Participant | null>(null);

  ngOnInit() {
    this.user.set(this.loginService.getUserInfo());
  }
}

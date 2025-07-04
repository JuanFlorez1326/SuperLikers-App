import { Component, input, OnInit } from '@angular/core';
import { Participant } from 'src/app/interfaces/login-response.interface';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {

  public user = input.required<Participant | null>();

}

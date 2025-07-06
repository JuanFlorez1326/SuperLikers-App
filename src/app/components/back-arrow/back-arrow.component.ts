import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
import { chevronBackCircle } from 'ionicons/icons';
import { IonIcon } from '@ionic/angular/standalone';
import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-arrow',
  templateUrl: './back-arrow.component.html',
  styleUrls: ['./back-arrow.component.scss'],
  imports: [IonIcon, RouterLink]
})
export class BackArrowComponent  implements OnInit {

  public title = input.required<string>();
  public route = input.required<string>();

  ngOnInit() {
    addIcons({ chevronBackCircle });
  }

}

import { addIcons } from 'ionicons';
import { chevronBackCircle } from 'ionicons/icons';
import { IonIcon } from '@ionic/angular/standalone';
import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-arrow',
  templateUrl: './back-arrow.component.html',
  styleUrls: ['./back-arrow.component.scss'],
  imports: [IonIcon]
})
export class BackArrowComponent  implements OnInit {

  public title = input.required<string>();

  ngOnInit() {
    addIcons({ chevronBackCircle });
  }

}

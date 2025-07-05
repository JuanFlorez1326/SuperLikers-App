import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';
import { ParticipantList } from 'src/app/interfaces/participants-response.interface';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss'],
  imports: [ IonCard, IonCardHeader, IonCardContent, IonCardTitle, CommonModule ]
})
export class ParticipantCardComponent  implements OnInit {

  public participant = input.required<ParticipantList>();

  constructor() { }

  ngOnInit() {}

}

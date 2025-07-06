import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ParticipantList } from 'src/app/interfaces/participants-response.interface';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-participant-card',
  templateUrl: './participant-card.component.html',
  styleUrls: ['./participant-card.component.scss'],
  imports: [ 
    IonCard, 
    IonCardHeader, 
    IonCardContent, 
    IonCardTitle, 
    CommonModule 
  ]
})
export class ParticipantCardComponent {

  public participant = input.required<ParticipantList>();

}
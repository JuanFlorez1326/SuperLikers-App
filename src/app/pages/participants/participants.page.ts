import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ParticipantsService } from 'src/app/services/participants.service';
import { BackArrowComponent } from "../../components/back-arrow/back-arrow.component";
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AllParticipants, ParticipantList } from 'src/app/interfaces/participants-response.interface';
import { ParticipantCardComponent } from "../../components/participant-card/participant-card.component";

@Component({
  selector: 'app-participants',
  templateUrl: './participants.page.html',
  styleUrls: ['./participants.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    BackArrowComponent,
    ParticipantCardComponent
  ]
})
export class ParticipantsPage implements OnInit {

  private participantService = inject(ParticipantsService);

  public allParticipants = signal<ParticipantList[]>([]);

  ngOnInit() {
    this.getParticipants();
  }

  public getParticipants(): void {
    this.participantService.getParticipants().subscribe({
      next: (response: AllParticipants) => {
        response.data.participants.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        this.allParticipants.set(response.data.participants);
      },
      error: (error) => {
        console.error('Error fetching participants:', error);
      }
    });
  }
}

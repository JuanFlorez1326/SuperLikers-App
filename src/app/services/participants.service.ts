import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HeaderHelper } from '../helpers/header-helper';
import { environment } from 'src/environments/environment';
import { AllParticipants } from '../interfaces/participants-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private http = inject(HttpClient);
  private env = environment;

  public getParticipants(): Observable<AllParticipants> {
    const headers = HeaderHelper.getHeaders();

    const body = {
      campaign: "4u",
      date_filter: {
        sdate: "2000-01-01",
        edate: new Date().toISOString().split('T')[0]
      }
    };

    return this.http.post<AllParticipants>(`${this.env.baseUrl}/participants/index`, body, { headers })
  }
}
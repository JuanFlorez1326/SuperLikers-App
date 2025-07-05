import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AllParticipants } from '../interfaces/participants-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private http = inject(HttpClient);
  private env = environment;

  public getParticipants(): Observable<AllParticipants> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.env.apiKey}`
    });

    const body = {
      campaign: "4u",
      date_filter: {
        sdate: "2000-01-01",
        edate: new Date().toISOString().split('T')[0]
      }
    };

    return this.http.post<AllParticipants>(`${this.env.proxyUrl}${this.env.baseUrl}/participants/index`, body, { headers })
  }

}

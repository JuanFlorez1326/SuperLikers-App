import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse, Participant } from '../interfaces/login-response.interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegisterResponse } from '../interfaces/register-response.interface';
import { Register } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private env = environment;
  private router = inject(Router);
  private http = inject(HttpClient);

  public login(numberUser: string, password: string, campaign: string = '4u'): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.env.apiKey}`
    });

    const body = {
      campaign: campaign,
      distinct_id: numberUser,
      participation: {
        'codigo-de-cliente': numberUser,
        password: password,
      },
    };

    return this.http.post<LoginResponse>(`${this.env.proxyUrl}${this.env.baseUrl}/microsite/sessions/login`, body, { headers });
  }

  public register(participant: Register) {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.env.apiKey}`
    });

    const body = {
      campaign: participant.campaign,
      not_send_verify_registration: participant.not_send_verify_registration,
      properties: {
        'codigo-de-cliente': participant.properties.code,
        'nombre-completo': participant.properties.fullname,
        email: participant.properties.email
      }
    };

    return this.http.post<RegisterResponse>(`${this.env.proxyUrl}${this.env.baseUrl}/participants`, body, { headers });
  }

  public logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public getUserInfo(): Participant | null {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }
}
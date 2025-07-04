import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/login-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient);
  private env = environment;

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

    return this.http.post<LoginResponse>(`${this.env.baseUrl}/microsite/sessions/login`, body, { headers });
  }

}

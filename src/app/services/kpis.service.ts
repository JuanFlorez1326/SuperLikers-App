import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { KpisResponse } from '../interfaces/kpis-response.interface';
import { Observable } from 'rxjs';
import { LoginService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class KpisService {

  private loginService = inject(LoginService);
  private http = inject(HttpClient);
  private env = environment;

  public user = this.loginService.getUserInfo();

  public getKpis(): Observable<KpisResponse> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.env.apiKey}`
    });

    const body = {
      campaign: "4u",
      _type: "External",
      atype: "avance_metas",
      distinct_id: this.user?.uid,
      date_filter: {
        sdate: "2024-08-01",
        edate: "2024-08-31"
      }  
    }; 

    return this.http.post<KpisResponse>(`${this.env.proxyUrl}${this.env.baseUrl}/entries/index`, body, { headers });
  }

}

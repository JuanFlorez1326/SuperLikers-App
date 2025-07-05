import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class HeaderHelper {
    static getHeaders(): HttpHeaders {
        return new HttpHeaders({
            Authorization: `Bearer ${environment.apiKey}`,
        });
    }
}

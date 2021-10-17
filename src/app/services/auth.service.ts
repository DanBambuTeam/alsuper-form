import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { emailreqst, ResponseRP, loginI, ResponseI} from '../models/auth.model'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private apiUrl = `${environment.API_URL}/auth`

  constructor(
    private http:HttpClient
  ) { }

  loginacces(dto:loginI): Observable <ResponseI> {
    return this.http.post<ResponseI>(`${this.apiUrl}/login`,dto);
  }

  restorePassword(data:emailreqst): Observable <ResponseRP>{
    return this.http.post<ResponseRP>(`${this.apiUrl}/forgot-password`,data)
  }


}

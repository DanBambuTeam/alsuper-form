import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { emailreqst, data, loginI, ResponseI} from '../models/auth.model'


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private apiUrl = `${environment.API_URL}/auth`

  constructor(
    private http:HttpClient
  ) { }

  login(dto:loginI){
    return this.http.post<ResponseI>(`${this.apiUrl}/login`,dto);
  }

  restorePassword(data:emailreqst){
    return this.http.post<data>(`${this.apiUrl}/forgot-password`,data)
  }
}

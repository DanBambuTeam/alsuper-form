import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginUserDTO } from '../models/user.model'
import { Auth } from '../models/auth.model'

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private apiUrl = `${environment.API_URL}/auth`

  constructor(
    private http:HttpClient
  ) { }

  login(dto:LoginUserDTO){
    return this.http.post<Auth>(`${this.apiUrl}/login`,dto);
  }
}

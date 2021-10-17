import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User,ResponseU } from '../models/user.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.API_URL}/users`

  constructor(
    private http: HttpClient
  ) { }

  create(dto: User):Observable<ResponseU>{
    return this.http.post<ResponseU>(this.apiUrl,dto)
  }
}

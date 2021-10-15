import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { User,CreateUserDTO } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.API_URL}/users`

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateUserDTO){ //este es el servicio para crear usuarios
    return this.http.post<User>(this.apiUrl,dto)

  }
}

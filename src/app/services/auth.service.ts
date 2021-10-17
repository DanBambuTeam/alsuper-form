import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { emailreqst, ResponseRP, loginI, ResponseI} from '../models/auth.model'
import { Observable, throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoginfailComponent } from '../components/login/loginfail/loginfail.component';
import { catchError } from 'rxjs/operators';
import { BadrqstComponent  } from '../components/login/badrqst/badrqst.component';




@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private apiUrl = `${environment.API_URL}/auth`

  constructor(
    private http:HttpClient,
    private dialog:MatDialog,
  ) { }

  loginacces(dto:loginI): Observable <ResponseI> {
    return this.http.post<ResponseI>(`${this.apiUrl}/login`,dto)
    .pipe(
      catchError((error: HttpErrorResponse) =>{
        if(error.status === 403){
          return  throwError(this.loginFailed());
        }
        if(error.status === 400){
          return  throwError(this.badRquestLogin());
        }
        return throwError('ups');
      } )
    );
  }

  restorePassword(data:emailreqst): Observable <ResponseRP>{
    return this.http.post<ResponseRP>(`${this.apiUrl}/forgot-password`,data)
  }

  loginFailed():void{
    const dialogRef = this.dialog.open(LoginfailComponent,{
    });
    dialogRef.afterClosed().subscribe(res => console.log(res))
  }

  badRquestLogin():void{
    const dialogRef = this.dialog.open(BadrqstComponent,{
    });
    dialogRef.afterClosed().subscribe(res => console.log(res))
  }

}

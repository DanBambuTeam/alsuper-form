import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {EMAIL_REGEX,ALPHANUMERIC} from '../../shared/data';
import { MatDialog } from '@angular/material/dialog';
import { LogsccesComponent } from './logscces/logscces.component';
import { loginI,ResponseI } from '../../models/auth.model'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userLogin: any = new FormGroup ({
    email: new FormControl('',[Validators.required,Validators.pattern(EMAIL_REGEX)]),
    password: new FormControl('',[Validators.required,Validators.pattern(ALPHANUMERIC)])
  });

  hide = true;

  stautsDetail: 'loading' | 'success' | 'error' | 'init' = 'init';


  constructor(
    private authService:AuthService,
    public dialog: MatDialog,
  ){}

  ngOnInit(): void {

  }

  onLogin(form:loginI){
    this.authService.loginacces(form)
    .subscribe(rta =>{
      console.log(rta);
      this.stautsDetail = 'success';
      this.loginScces();
    },response => {
      console.log(response.error.data)
      this.stautsDetail = 'error';
    });
  }

  /*save(event: Event) { //con esto se evita que se recargue la pagina al enviar.
    event.preventDefault();
    if(this.userLogin.valid){ //si los datos son validos etonces enseña en la consola el valor de lo que se envia
      const value = this.userLogin.value;
      console.log(value);// se imprime ese valor
    }
  }*/

  get emailField(){
    return this.userLogin.get('email');
  }

  get passwordField(){
    return this.userLogin.get('password');
  }

  loginScces():void{
    const dialogRef = this.dialog.open(LogsccesComponent,{
    });
    dialogRef.afterClosed().subscribe(res => console.log(res))
  }




}

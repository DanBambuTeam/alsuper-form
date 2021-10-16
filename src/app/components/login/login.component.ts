import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {EMAIL_REGEX,ALPHANUMERIC} from '../../shared/data';
import { MatDialog } from '@angular/material/dialog';
import { ChekcodeComponent } from '../chekcode/chekcode.component';


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


  constructor(
    private authService:AuthService,
    public dialog: MatDialog
  ){}

  ngOnInit(): void {

  }

  login(){
    try{
      this.authService.login(this.userLogin)
        .subscribe(rta =>{
          console.log(rta.jwt)
          if(!rta.jwt ){
            this.userLogin.openDialog();
          }
        });
    }catch (error){
      this.userLogin.openDialog();
    }
  }


  save(event: Event) { //con esto se evita que se recargue la pagina al enviar.
    event.preventDefault();
    if(this.userLogin.valid){ //si los datos son validos etonces enseña en la consola el valor de lo que se envia
      const value = this.userLogin.value;
      console.log(value);// se imprime ese valor
    }else{
      //habilitando el envio de los datos del formulario aun si no se llenaron, entonces se puede enviar un error
      this.userLogin.allMarkedtouched();
    }
  }

  get emailField(){
    return this.userLogin.get('email');
  }

  get passwordField(){
    return this.userLogin.get('password');
  }

  openDialog():void{
    const dialogRef = this.dialog.open(ChekcodeComponent,{
    });
    dialogRef.afterClosed().subscribe(res => console.log(res))
  }



}

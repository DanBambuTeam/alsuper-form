import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service'
import { FormControl, Validators, FormGroup} from '@angular/forms';
import {PHONE,EMAIL_REGEX,ALPHANUMERIC} from '../../shared/data';
import { RegisscesComponent } from './regissces/regissces.component';
import { RegisfailedComponent } from './regisfailed/regisfailed.component';
import { MatDialog } from '@angular/material/dialog';






@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent implements OnInit {

  public userRegister: any = new FormGroup({ //acuerdate de tipar en any
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('',[Validators.required,Validators.pattern(EMAIL_REGEX)]),
    cellphone: new FormControl('',[Validators.required,Validators.pattern(PHONE)]),
    password: new FormControl('',[Validators.required,Validators.pattern(ALPHANUMERIC)]),
   });

   stautsDetail: 'loading' | 'success' | 'error' | 'init' = 'init';


  constructor(

    private usersServices: UsersService,
    private router:Router,
    public dialog: MatDialog,
  ){

   }

  ngOnInit(): void {
  }

  createNewUser(form: any){
    this.usersServices.create(form)
    .subscribe(rta =>{
      console.log(rta);
      this.stautsDetail = 'success';
      this.registerSuccesDialog();
    },response => {
      console.log(response)
      this.stautsDetail = 'error';
      this.registerFailedDialog();
    });

  };



//FUNCIONES PARA DECLARAR LOS CAMPOS A VALIDAR

  get nameField(){
    return this.userRegister.get('name');
  }

  get lastNameField(){
    return this.userRegister.get('lastname');
  }

  get emailField(){
    return this.userRegister.get('email');
  }

  get cellphoneFiel(){
    return this.userRegister.get('cellphone');
  }

  get passwordField(){
    return this.userRegister.get('password');
  }

  registerSuccesDialog():void{
    const dialogRef = this.dialog.open(RegisscesComponent,{
    });
    dialogRef.afterClosed().subscribe(res => console.log(res))
  }

  registerFailedDialog():void{
    const dialogRef = this.dialog.open(RegisfailedComponent,{
    });
    dialogRef.afterClosed().subscribe(res => console.log(res))
  }

}

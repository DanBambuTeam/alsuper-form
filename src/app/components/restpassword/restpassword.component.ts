import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { FormControl,Validators, } from '@angular/forms';
import { EMAIL_REGEX } from '../../shared/data';
import { emailreqst } from 'src/app/models/auth.model';
import { MatDialog } from '@angular/material/dialog';
import { ResetpwfailedComponent } from './resetpwfailed/resetpwfailed.component';
import { ResetpwscessComponent } from './resetpwscess/resetpwscess.component';

@Component({
  selector: 'app-restpassword',
  templateUrl: './restpassword.component.html',
  styleUrls: ['./restpassword.component.scss']
})
export class RestpasswordComponent implements OnInit {


  public sendemail: any = new FormControl('',[Validators.required,Validators.pattern(EMAIL_REGEX)]);

  stautsDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private authService:AuthService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  save(event: Event) {
    event.preventDefault();
    if(this.sendemail.valid){
      const value = this.sendemail.value;
      console.log(value);
    }else{
      this.sendemail.markAllAsTouched();
    }
  }

  restPassword(form:emailreqst){
    this.authService.restorePassword(form)
    .subscribe(rta =>{
      console.log(rta);
      this.stautsDetail = 'success'
      this.ressetPasswordSuccess()
    },response => {
      console.log(response);
      this.stautsDetail = 'error';
      this.ressetPasswordFailed();

    });
  }

  ressetPasswordFailed():void{
    const dialogRef = this.dialog.open(ResetpwfailedComponent,{
    });
    dialogRef.afterClosed().subscribe(res => console.log(res))
  }

  ressetPasswordSuccess():void{
    const dialogRef = this.dialog.open(RestpasswordComponent,{
    });
    dialogRef.afterClosed().subscribe(res => console.log(res))
  }
}

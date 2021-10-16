import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { FormControl,Validators, } from '@angular/forms';
import { EMAIL_REGEX } from '../../shared/data';
import { emailreqst } from 'src/app/models/auth.model';

@Component({
  selector: 'app-restpassword',
  templateUrl: './restpassword.component.html',
  styleUrls: ['./restpassword.component.scss']
})
export class RestpasswordComponent implements OnInit {


  public sendemail: any = new FormControl('',[Validators.required,Validators.pattern(EMAIL_REGEX)]);

  constructor(
    private authService:AuthService,
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

  restPassword(){
    this.authService.restorePassword(this.sendemail)
    .subscribe(rta =>{
      console.log(rta);
    })
  }

}

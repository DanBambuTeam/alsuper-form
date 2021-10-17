import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResendverifyComponent } from './resendverify/resendverify.component';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  public verifyData: any = new FormGroup({
    code: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]),
    phone: new FormControl('',[Validators.required]),
  });

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  showPhone(){
    const phoneNumber = `+52 ${this.verifyData.phone}`
    return phoneNumber;
  }

  get codeField(){
    return this.verifyData.get('code');
  }

  reSendVerfiedCode():void{
    const dialogRef = this.dialog.open(ResendverifyComponent,{
    });
    dialogRef.afterClosed().subscribe(res => console.log(res))
  }


}

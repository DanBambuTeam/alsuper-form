import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-resendverify',
  templateUrl: './resendverify.component.html',
  styleUrls: ['./resendverify.component.scss']
})
export class ResendverifyComponent implements OnInit {

  constructor(

    public dialogRef:MatDialogRef<ResendverifyComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.dialogRef.close();
  }


}

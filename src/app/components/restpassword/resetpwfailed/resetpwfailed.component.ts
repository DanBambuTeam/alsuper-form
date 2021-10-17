import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-resetpwfailed',
  templateUrl: './resetpwfailed.component.html',
  styleUrls: ['./resetpwfailed.component.scss']
})
export class ResetpwfailedComponent implements OnInit {

  constructor(

    public dialogRef:MatDialogRef<ResetpwfailedComponent>,

    @Inject(MAT_DIALOG_DATA) public message: string

   ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.dialogRef.close();
  }


}

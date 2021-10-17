import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-resetpwscess',
  templateUrl: './resetpwscess.component.html',
  styleUrls: ['./resetpwscess.component.scss']
})
export class ResetpwscessComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<ResetpwscessComponent>,

    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.dialogRef.close();
  }

}

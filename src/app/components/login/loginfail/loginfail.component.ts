import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-loginfail',
  templateUrl: './loginfail.component.html',
  styleUrls: ['./loginfail.component.scss']
})
export class LoginfailComponent implements OnInit {

  constructor(

    public dialogRef:MatDialogRef<LoginfailComponent>,

    @Inject(MAT_DIALOG_DATA) public message: string

  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.dialogRef.close()
  }

}

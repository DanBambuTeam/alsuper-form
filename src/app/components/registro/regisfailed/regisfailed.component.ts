import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-regisfailed',
  templateUrl: './regisfailed.component.html',
  styleUrls: ['./regisfailed.component.scss']
})
export class RegisfailedComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<RegisfailedComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.dialogRef.close();
  }


}

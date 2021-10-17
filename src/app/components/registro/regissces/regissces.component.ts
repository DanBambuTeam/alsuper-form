import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-regissces',
  templateUrl: './regissces.component.html',
  styleUrls: ['./regissces.component.scss']
})
export class RegisscesComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<RegisscesComponent>,

    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.dialogRef.close();
  }

}

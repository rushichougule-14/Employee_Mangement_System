import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-delete',
  templateUrl: './emp-delete.component.html',
  styleUrl: './emp-delete.component.css'
})
export class EmpDeleteComponent 
{
  constructor(public dialogRef:MatDialogRef<EmpDeleteComponent>)
  {

  }
  onNoClick():void
  {
    this.dialogRef.close(false);
  }
  onYesClick():void
  {
    this.dialogRef.close(true);

  }
}

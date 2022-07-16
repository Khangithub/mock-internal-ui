import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogData } from 'src/app/model/dialog-data';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})

export class ExampleDialogComponent implements OnInit {
  content: string = '';

  constructor(
    public dialogRef: MatDialogRef<ExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  filterContent($event: string) {
    const replaceText = $event.replace('a', '');
    this.content = replaceText
  }
}

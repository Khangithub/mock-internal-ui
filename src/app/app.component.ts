import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ExampleDialogComponent } from './components/example-dialog/example-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animal = 'animal';
  name = 'name';

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ExampleDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.animal = result;
    });
  }
}

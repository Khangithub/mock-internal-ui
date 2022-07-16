import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material';
import { ExampleDialogComponent } from './components/example-dialog/example-dialog.component';

const material = [
  MatDialogModule
]
@NgModule({
  declarations: [
    AppComponent,
    ExampleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    material
  ],
  entryComponents: [ExampleDialogComponent],
  exports: [material],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

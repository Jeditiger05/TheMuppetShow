import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMupettsComponent } from './my-mupetts/my-mupetts.component';
import { MyArrayMupettsComponent } from './my-array-mupetts/my-array-mupetts.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMupettsComponent,
    MyArrayMupettsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

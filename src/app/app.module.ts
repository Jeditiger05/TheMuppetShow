import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMupettsComponent } from './my-mupetts/my-mupetts.component';
import { MyPetsComponent } from './my-pets/my-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    MyMupettsComponent,
    MyPetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exo1Component } from './exo1/exo1.component';
import { Exo1ligneComponent } from './exo1ligne/exo1ligne.component';

@NgModule({
  declarations: [
    AppComponent,
    Exo1Component,
    Exo1ligneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

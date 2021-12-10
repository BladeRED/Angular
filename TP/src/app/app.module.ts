import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { TableauComponent } from './tableau/tableau.component';
import { LigneComponent } from './ligne/ligne.component';
import { BoutonComponent } from './bouton/bouton.component';
import { AnimauxComponent } from './animaux/animaux.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableauComponent,
    LigneComponent,
    BoutonComponent,
    AnimauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

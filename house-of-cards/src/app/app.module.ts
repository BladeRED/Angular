import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { RowItemComponent } from './row-item/row-item.component';
import { ColItemComponent } from './col-item/col-item.component';
import { CardComponent } from './card/card.component';
import { CarService } from './services/car/car.service';

@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    RowItemComponent,
    ColItemComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

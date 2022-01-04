import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { OffersListComponent } from './views/offers-list/offers-list.component';

import { OfferEditComponent } from './views/offer-edit/offer-edit.component';
import { OfferNewComponent } from './views/offer-new/offer-new.component';
import { ErrorComponent } from './views/error/error.component';
import { OfferFormComponent } from './components/offer-form/offer-form.component';
import { ErrorsFormComponent } from './components/errors-form/errors-form.component';
import { HeaderComponent } from './components/header/header.component';
import { OffersDetailsComponent } from './views/offer-details/offers-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OffersListComponent,
    OffersDetailsComponent,
    OfferEditComponent,
    OfferNewComponent,
    ErrorComponent,
    OfferFormComponent,
    ErrorsFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

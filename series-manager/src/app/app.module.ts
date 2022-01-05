import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SerieListComponent } from './views/serie-list/serie-list.component';
import { SerieDetailsComponent } from './views/serie-details/serie-details.component';
import { SerieNewComponent } from './views/serie-new/serie-new.component';
import { SerieEditComponent } from './views/serie-edit/serie-edit.component';
import { ErrorComponent } from './views/error/error.component';
import { SerieFormComponent } from './components/serie-form/serie-form.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SerieListComponent,
    SerieDetailsComponent,
    SerieNewComponent,
    SerieEditComponent,
    ErrorComponent,
    SerieFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

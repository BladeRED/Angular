import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookService } from './services/book/book.service';
import { BooksListComponent } from './views/books-list/books-list.component';
import { AuthComponent } from './views/auth/auth.component';
import { ErrorComponent } from './views/error/error.component';
import { SingleBookComponent } from './views/single-book/single-book.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    AuthComponent,
    ErrorComponent,
    SingleBookComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

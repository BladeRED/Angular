import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './views/products-list/products-list.component';
import { ProductService } from './services/product.service';
import { AuthComponent } from './views/auth/auth.component';
import { ErrorComponent } from './views/error/error.component';
import { SingleProductComponent } from './views/single-product/single-product.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AuthComponent,
    ErrorComponent,
    SingleProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

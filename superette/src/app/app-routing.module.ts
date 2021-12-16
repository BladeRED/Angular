import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthComponent } from './views/auth/auth.component';
import { EditProductComponent } from './views/edit-product/edit-product.component';
import { ErrorComponent } from './views/error/error.component';
import { NewProductComponent } from './views/new-product/new-product.component';
import { ProductsListComponent } from './views/products-list/products-list.component';
import { SingleProductComponent } from './views/single-product/single-product.component';

const routes: Routes = [

{path: '', component:AuthComponent}, //root
{path: 'products',canActivate:[AuthGuard], component:ProductsListComponent},// page globale
{path: 'products/new',canActivate:[AuthGuard], component:NewProductComponent},
{path: 'products/:id',canActivate:[AuthGuard], component:SingleProductComponent},// page produit unique auquel on accède par l'id du produit
{path: 'products/edit/:id',canActivate:[AuthGuard], component:EditProductComponent},
{path: 'not-found', component: ErrorComponent},
{path: '**', redirectTo: 'not-found'} //redirection en cas d'erreur



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

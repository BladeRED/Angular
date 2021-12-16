import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthComponent } from './views/auth/auth.component';
import { BooksListComponent } from './views/books-list/books-list.component';
import { EditBookComponent } from './views/edit-book/edit-book.component';
import { ErrorComponent } from './views/error/error.component';
import { NewBookComponent } from './views/new-book/new-book.component';
import { SingleBookComponent } from './views/single-book/single-book.component';

const routes: Routes = [

{path: '',component:AuthComponent}, //root
{path: 'books',canActivate:[AuthGuard],component:BooksListComponent},
//localhost:4200/books/1
//localhost:4200/books/2
//localhost:4200/books/145
{path: 'books/new',canActivate:[AuthGuard], component:NewBookComponent},
{path: 'books/:id',canActivate:[AuthGuard], component:SingleBookComponent},
{path: 'books/edit/:id',canActivate:[AuthGuard], component:EditBookComponent},
{path:'not-found', component: ErrorComponent},
{path:'**', redirectTo:'not-found'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

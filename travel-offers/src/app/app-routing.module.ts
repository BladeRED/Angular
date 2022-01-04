import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { OffersListComponent } from './views/offers-list/offers-list.component';
import { OfferNewComponent } from './views/offer-new/offer-new.component';
import { OffersDetailsComponent } from './views/offer-details/offers-details.component';
import { OfferEditComponent } from './views/offer-edit/offer-edit.component';
import { ErrorComponent } from './views/error/error.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'offers', component: OffersListComponent },
  { path: 'offers/new', component: OfferNewComponent },
  { path: 'offers/:id', component: OffersDetailsComponent },
  { path: 'offers/edit/:id', component: OfferEditComponent },
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutRouteComponent } from './routes/about-route/about-route.component';
import { ContactRouteComponent } from './routes/contact-route/contact-route.component';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { LegalRouteComponent } from './routes/legal-route/legal-route.component';
import { ProductsRouteComponent } from './routes/products-route/products-route.component';
import { ServicesRouteComponent } from './routes/services-route/services-route.component';

const routes: Routes = [
  { path: '', component: HomeRouteComponent },
  { path: 'about', component: AboutRouteComponent },
  { path: 'contact', component: ContactRouteComponent },
  { path: 'legal', component: LegalRouteComponent },
  { path: 'products/:id', component: ProductsRouteComponent },
  { path: 'services/:id', component: ServicesRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

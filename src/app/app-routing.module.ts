import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductRatingsFormComponent } from './product-ratings-form/product-ratings-form.component';
import { ProductRatingsListComponent } from './product-ratings-list/product-ratings-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProductsListComponent },
  { path: 'produtos/novo', component: ProductsFormComponent },
  { path: 'produtos/:id', component: ProductsFormComponent },
  { path: 'produtos/:product_id/avaliacoes', component: ProductRatingsListComponent },
  { path: 'produtos/:product_id/avaliacoes/novo', component: ProductRatingsFormComponent },
  { path: 'produtos/:product_id/avaliacoes/:id', component: ProductRatingsFormComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

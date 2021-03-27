import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductCategoriesListComponent } from './product-categories-list/product-categories-list.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: 'product-categories-list',
      component: ProductCategoriesListComponent,
    },
    {
      path: 'products-list',
      component: ProductsListComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule { }

export const routedComponents = [
  ProductsComponent,
  ProductCategoriesListComponent,
  ProductsListComponent,
];

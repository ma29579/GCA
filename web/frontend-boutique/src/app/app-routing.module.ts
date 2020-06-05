import {NgModule, Output} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {CartComponent} from './cart/cart.component';
import {EventEmitter} from "events";


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,

  },
  {
    path: 'cart',
    component: CartComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

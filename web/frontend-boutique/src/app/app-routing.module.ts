import {NgModule, Output} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {CartComponent} from './cart/cart.component';
import {EventEmitter} from "events";
import {OrderCompleteComponent} from './order-complete/order-complete.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,

  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'orderComplete',
    component: OrderCompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

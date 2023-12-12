import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseProductComponent } from './base-product/base-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: BaseProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

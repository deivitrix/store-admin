import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAdminComponent } from './base-admin/base-admin.component';

const routes: Routes = [
  {
    path: '',
    component:BaseAdminComponent,
  children:[
    {
      path: '',
      redirectTo: 'inicio', pathMatch: 'full'
    },
    {
      path: 'inicio',
      loadChildren: () => import('./../home/home.module').then( m => m.HomeModule),
    },
    {
      path: 'product',
      loadChildren: () => import('./../product/product.module').then( m => m.ProductModule),
    }

  ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

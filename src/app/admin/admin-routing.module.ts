import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseAdminComponent } from './base-admin/base-admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component:BaseAdminComponent,
    data:{ruta:'home'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

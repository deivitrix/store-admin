import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseHomeComponent } from './base-home/base-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: BaseHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLoginComponent } from './base/base-login/base-login.component';
import { LoginComponent } from './page/login/login.component';
import { SesionGuard } from './guards/sesion/sesion.guard';

const routes: Routes = [
  {
    path:'',
    component:BaseLoginComponent,
    children:[
      {
        path:'',
        redirectTo:'auth',
        pathMatch:'full'
      },
      {
          path:'auth',
          canActivate:[SesionGuard],
          component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

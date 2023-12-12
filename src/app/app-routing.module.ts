import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoSesionGuard } from './auth/guards/no-sesion.guard';
import { SesionGuard } from './auth/guards/sesion/sesion.guard';

const routes: Routes = [
  {
      path:'',
      canActivate:[SesionGuard],
      loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'app',
    canActivate:[NoSesionGuard],
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

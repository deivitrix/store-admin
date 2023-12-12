import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { BaseAdminComponent } from './base-admin/base-admin.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    BaseAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule
  ]
})
export class AdminModule { }

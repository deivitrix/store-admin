import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BaseHomeComponent } from './base-home/base-home.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    BaseHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule
  ]
})
export class HomeModule { }

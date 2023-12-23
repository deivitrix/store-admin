import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { BaseProductComponent } from './base-product/base-product.component';
import { LayoutModule } from '../layout/layout.module';
import { ProductdetalleComponent } from './components/productdetalle/productdetalle.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    BaseProductComponent,
    ProductdetalleComponent,
    ListproductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    LayoutModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ]
})
export class ProductModule { }

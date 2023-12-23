import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { ChartComponent } from './components/chart/chart.component';
import { CardContenidoComponent } from './components/card-contenido/card-contenido.component';
import { NavbarperfilComponent } from './components/navbarperfil/navbarperfil.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ChartComponent,
    CardContenidoComponent,
    NavbarperfilComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatIconModule
  ],
  exports:[NavbarComponent,ChartComponent, CardContenidoComponent,NavbarperfilComponent]
})
export class LayoutModule { }

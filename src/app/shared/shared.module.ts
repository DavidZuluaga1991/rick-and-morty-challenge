import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFlipComponent } from './card-flip/card-flip.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { CardBasicComponent } from './card-basic/card-basic.component';

@NgModule({
  declarations: [
    CardFlipComponent,
    BarraLateralComponent,
    PaginationComponent,
    CardBasicComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    CardFlipComponent,
    BarraLateralComponent,
    PaginationComponent,
    CardBasicComponent
  ]
})
export class SharedModule { }

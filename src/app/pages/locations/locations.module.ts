import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from 'src/app/core/services/location/location.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PipesModule } from 'src/app/core/pipes/pipes.module';


@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    HttpClientModule,
    SharedModule,
    PipesModule
  ],
  providers: [
    LocationService
  ],
})
export class LocationsModule { }

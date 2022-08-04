import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { EpisodeService } from 'src/app/core/services/episode/episode.service';
import { PipesModule } from 'src/app/core/pipes/pipes.module';


@NgModule({
  declarations: [
    EpisodesComponent,
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    HttpClientModule,
    SharedModule,
    PipesModule
  ],
  providers: [
    EpisodeService
  ]
})
export class EpisodesModule { }

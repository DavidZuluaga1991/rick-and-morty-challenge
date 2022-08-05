import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IEpisode } from '../../models/episode/episode.model';
import { BaseHttpService } from '../base-service/base-http.services';

@Injectable()
export class EpisodeService extends BaseHttpService<IEpisode> {

  constructor(protected override http: HttpClient) {
    super(http, environment.api);
  }
}

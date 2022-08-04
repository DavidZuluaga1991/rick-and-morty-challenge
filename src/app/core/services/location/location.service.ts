import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ILocation } from '../../models/location/location.model';
import { BaseHttpService } from '../base-service/base-http.services';

@Injectable({
  providedIn: 'root'
})
export class LocationService extends BaseHttpService<ILocation> {

  constructor(protected override http: HttpClient) {
    super(http, environment.api);
  }
}

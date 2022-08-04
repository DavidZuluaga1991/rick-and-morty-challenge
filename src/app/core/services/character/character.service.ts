import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICharacter } from '../../models/character/character.model';
import { BaseHttpService } from '../base-service/base-http.services';

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseHttpService<ICharacter> {

  constructor(protected override http: HttpClient) {
    super(http, environment.api);
  }
}

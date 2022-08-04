import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICharacter } from 'src/app/core/models/character/character.model';
import { IPagination } from 'src/app/core/models/pagination/pagination.model';
import { ResultData } from 'src/app/core/models/result-data/result-data';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  public data?: ICharacter[];
  public id?: string;
  public pagination?: IPagination;

  private subscription: Subscription = new Subscription();

  constructor(private router: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.getListCharacter(1);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getListCharacter(page: number) {
    this.subscription = this.characterService.get('character?page=' + page).subscribe((response: ResultData<ICharacter[]>) => {
      this.data = response.results;
      this.pagination = response.info;
    });
  }

}

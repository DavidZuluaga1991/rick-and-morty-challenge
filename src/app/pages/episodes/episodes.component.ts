import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEpisode } from 'src/app/core/models/episode/episode.model';
import { IPagination } from 'src/app/core/models/pagination/pagination.model';
import { ResultData } from 'src/app/core/models/result-data/result-data';
import { EpisodeService } from 'src/app/core/services/episode/episode.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit, OnDestroy {

  public data?: IEpisode[];
  public pagination?: IPagination;
  private subscription: Subscription = new Subscription();

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.getListEpisode(1);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getListEpisode(page: number) {
    this.subscription = this.episodeService.get('episode?page=' + page).subscribe((response: ResultData<IEpisode[]>) => {
      this.data = response.results;
      this.pagination = response.info;
    });
  }
}

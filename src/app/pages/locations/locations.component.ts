import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ILocation } from 'src/app/core/models/location/location.model';
import { IPagination } from 'src/app/core/models/pagination/pagination.model';
import { ResultData } from 'src/app/core/models/result-data/result-data';
import { LocationService } from 'src/app/core/services/location/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, OnDestroy {

  public data?: ILocation[];
  public pagination?: IPagination;
  private subscription: Subscription = new Subscription();

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.getListLocation(1);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getListLocation(page: number) {
    this.subscription = this.locationService.get('location?page=' + page).subscribe((response: ResultData<ILocation[]>) => {
      this.data = response.results;
      this.pagination = response.info;
      console.log(this.data);
    });
  }

}

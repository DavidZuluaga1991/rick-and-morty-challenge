import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItemPagination } from 'src/app/core/models/pagination/item-pagination.model';
import { IPagination } from 'src/app/core/models/pagination/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() pagination?: IPagination;
  @Output() actionPage = new EventEmitter<number>();

  public viewPage: IItemPagination[] = [];
  public selectPage: number = 1;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pagination);
    if (this.pagination) {
      this.initPagination(1);
    }
  }

  public action(page?: string) {
    if (page !== '...') {
      if (this.pagination) {
        this.selectPage = +(page ?? 1);
      }

      this.initPagination(+(page ?? 1));
      this.actionPage.emit(+(page ?? 1));
    }
  }

  private initPagination(page: number) {
    this.viewPage = [];
    this.viewPage.push({id: '1', text: '1'});
    this.validatePages(page);
    this.viewPage.push({id: `${(this.pagination?.pages ?? 1)}`, text: `${(this.pagination?.pages ?? 1)}`});

  }
  private validatePages(page: number) {
    if (page > 2) {
      if (page > 3) {
        this.viewPage.push({id: `points`, text: `...`, tooltip: `Numeros entre ${ page }`});
      }
      this.viewPage.push({id: `${page - 1}`, text: `${page - 1}`});
    }
    if (page !== 1 && page !== this.pagination?.pages) {
      this.viewPage.push({id: `${page}`, text: `${page}`});
    }
    if (this.pagination && page < this.pagination.pages - 1) {
      this.viewPage.push({id: `${page + 1}`, text: `${page + 1}`});
      this.viewPage.push({id: `points`, text: `...`});
    }
  }


}

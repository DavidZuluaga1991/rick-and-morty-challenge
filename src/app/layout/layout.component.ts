import { Component, OnInit } from '@angular/core';
import { IItemBarraLateral } from '../core/models/item-barra-lateral/item-barra-lateral.model';
import { IItem } from '../core/models/item/item.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public itemsBarraLateral: IItemBarraLateral = {
    position: 'left',
    items: [
      {
        id: 'characters',
        route: 'characters',
        icon: 'assignment',
        toolbar: 'Character'
      },
      {
        id: 'locations',
        route: 'locations',
        icon: 'room',
        toolbar: 'Locations'
      },
      {
        id: 'episodes',
        route: 'episodes',
        icon: 'view_list',
        toolbar: 'Episodes'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}

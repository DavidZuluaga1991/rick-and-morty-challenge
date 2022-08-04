import { Component, Input, OnInit } from '@angular/core';
import { IItemBarraLateral } from 'src/app/core/models/item-barra-lateral/item-barra-lateral.model';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.scss']
})
export class BarraLateralComponent implements OnInit {

  @Input() options?: IItemBarraLateral;

  constructor() { }

  ngOnInit(): void {
  }

}

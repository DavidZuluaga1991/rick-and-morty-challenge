import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/core/models/character/character.model';

@Component({
  selector: 'app-card-flip',
  templateUrl: './card-flip.component.html',
  styleUrls: ['./card-flip.component.scss']
})
export class CardFlipComponent implements OnInit {

  @Input() data?: ICharacter;
  constructor() { }

  ngOnInit(): void {
  }

}

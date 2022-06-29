import { Component, OnInit, Input } from '@angular/core';
import { ICharacter } from 'src/app/models/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /** ! le dice al compiler ke confie en nosotros ke character va a tener un valor
   *     asi no tengo problemas de inicializacion del objeto
  */
  @Input()
  public character!: ICharacter;
  constructor() { }

  ngOnInit(): void {
  }

}

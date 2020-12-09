import {Component, ViewEncapsulation} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  type: string;
}

@Component({
  selector: 'bio',
  templateUrl: './bio.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class BioComponent {

  tiles: Tile[] = [
    {type: 'type1', cols: 3, rows: 1, color: 'lightblue'},
    {type: 'type2', cols: 1, rows: 2, color: 'lightgreen'},
    {type: 'type3', cols: 1, rows: 1, color: 'lightpink'},
    {type: 'type4', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}

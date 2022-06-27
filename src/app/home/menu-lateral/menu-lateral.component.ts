import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {

    tiles: Tile[] = [
      {text: 'One', cols: 2, rows: 10, color: 'lightblue'},
      {text: 'Two', cols: 6, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 6, rows: 6, color: 'lightpink'},
      {text: 'Four', cols: 6, rows: 2, color: '#DDBDF1'},
    ];


  constructor() { }

}

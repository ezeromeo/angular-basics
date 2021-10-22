import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = [
    'Spirderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Captain America',
  ];
  deletedHero: string = '';

  deleteHero() {
    this.deletedHero = this.heroes.shift() || '';
  }
}

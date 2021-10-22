import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
})
export class HeroComponent {
  name: string = 'Ironman';
  age: number = 45;

  getName(): string {
    return `${this.name} - ${this.age}`;
  }

  get capitalizedName() {
    return this.name.toUpperCase();
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 29;
  }
}

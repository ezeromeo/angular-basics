import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>
    <h3>La base es: <strong> 5 </strong></h3>

    <button (click)="gather(base)">+ {{ base }}</button>
    <!-- El (click) especifica un evento, en este caso
            un click. Cada vez que se haga un click en el boton
            se incrementara en 1 el numero predefinido. -->

    <span>{{ number }}</span>

    <button (click)="gather(-base)">- {{ base }}</button>
  `,
})
export class CounterComponent {
  public title: string = 'Counter App';

  public number: number = 10;

  public base: number = 5;

  gather(value: number) {
    this.number += value;
  }
}

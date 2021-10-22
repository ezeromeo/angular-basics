import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Crear un modulo llamado counterModule. Declarations y exports.


import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter.module';

// Se pueden importar modulos de otros modulos, eso achica el tamanio del codigo y de los modulos
// y asegura que si estas trabajando en equipo no se superpongan cosas.

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

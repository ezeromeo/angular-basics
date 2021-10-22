import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //app-root es el nombre de un componente de index.html
  templateUrl: 'app.component.html', // apunta al archivo html sobre el cual  estamos trabajando
})
export class AppComponent {

}

// Title es una variable cualquiera
// para poder verla reflejada en el html, se escriben dos llaves
// en el archivo app.component.html
// y se pone dentro de las dos llaves la variable title.
// De esa manera, se imprime en nuestro html el contenido de title
// Se puede escribir cualquier cosa, una suma, una resta, lo que sea
//
// Tambien se le aclara, aunque sea redundante, el nivel de acceso
// y ademas, se enmarca su tipo, string en este ejemplo.
// add() {
//   this.number += 1; // En el lado de app.component.ts puedo hacer
//   // referencia a this porque estoy instanciando una clase.
// }

// substraction() {
//   this.number -= 1;
// }

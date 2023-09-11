import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {

  // Boton Mostrar
  mostrar=true;
  // Tarjeta - Frases
  frase :any={
    mensaje: "Un gran poder conlleva una gran responsabilidad",
    autor: "Ben Parker"
  }

  // Array strings
  personajes:string[]=["Spiderman","Venom","Dr Octopus"];



}

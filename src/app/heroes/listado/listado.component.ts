import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {
  heroeBorrado:string="";
  heroes:string[] = ['Spiderman','Iroman','Hulk','Thor','Superman'];

  borrarHeroe()
  { 
    console.log('Borrando....');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}

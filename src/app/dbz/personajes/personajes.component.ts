import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  // @Input() personajes: Personaje[] = [];

  get personajes():Personaje[]{
     return this.dbzservice.personajes;
  }

  constructor(private dbzservice:dbzService){

  }
}

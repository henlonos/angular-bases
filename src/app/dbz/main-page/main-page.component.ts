import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {


  nuevo : Personaje = {
      nombre:'Maestro Rochi',
      poder: 1000
  }
    constructor(private service:dbzService){

  }


  cambiarNombre(event:any)
  {
    console.log(event);
  }
}

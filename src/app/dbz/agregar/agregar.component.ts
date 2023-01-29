import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

@Input() nuevo:Personaje ={
  nombre:'',
  poder: 0
} ;
@Output() nuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

constructor( private dbzservice:dbzService){

}

agregar()
  {
    if(this.nuevo.nombre.trim().length === 0)
    return;
    this.dbzservice.agregarPersonaje(this.nuevo);
    // this.nuevoPersonaje.emit(this.nuevo);
    console.log(this.nuevo);
    this.nuevo= {
        nombre :'',
        poder:0

    }

  }
}

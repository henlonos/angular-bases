import  {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
    <h1>{{titulo}}</h1>
<h1>La base es: <strong>{{base}}</strong></h1>
<button (click)="acumular(base)">+{{base}}</button>
<span>{{contador}}</span>
<button (click)="acumular(-base)">-{{base}}</button>

    
    
    `
})
export class ContadorComponent{
    public contador:number = 10;
    public titulo:string = 'Contador app';
    public base:number = 5;
    acumular(valor :number)
    {
      this.contador += valor;
      if(this.contador < 0) this.contador = 0;
    }
  
}
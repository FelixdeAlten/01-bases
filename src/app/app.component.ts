import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
public  titulo: string = 'Contador App';
numero:number =10;

base:number =5;

sumar(){

  this.numero++;
}
restar (){
  this.numero--;
}

acumular(valor:number){
this.numero+=valor;

}

}

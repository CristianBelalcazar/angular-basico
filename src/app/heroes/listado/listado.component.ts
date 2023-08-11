import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {


  heroes:string[]=['SpiderMan','Naruto','Sasuke','B10'];
 heroeB:string = '';
  borrarHeroe(){
    this.heroeB= this.heroes.pop()||'';
    
  }
}

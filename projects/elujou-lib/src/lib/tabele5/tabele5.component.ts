import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabele5-component',
  templateUrl: './tabele5.component.html',
  styleUrls: ['./tabele5.component.scss'],
  standalone: true
})
export class Tabele5Component {

  tjt: number;
  aasta: string;
  aastax: string;

  constructor() { 
    this.tjt = Math.round((xtee.TJT)*100)/100;
    //this.tjt = xtee.TJT;
    this.aasta = xtee.prognAasta;
    this.aastax = this.aasta.replaceAll('"', "");
    
  }
  
}
import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabele3-component',
  templateUrl: './tabele3.component.html',
  styleUrls: ['./tabele3.component.scss'],
  standalone: true
})
export class Tabele3Component {

  vk: number;  
  kos: number;
  ikk: number;
  aasta: string;
  aastax: string;

  constructor() { 
    this.vk = Math.round((xtee.VK)*100)/100;
    //this.vk = xtee.VK;
    this.kos = Math.round((xtee.KOS)*100)/100;
    //this.kos = xtee.KOS;
    this.ikk = Math.round((xtee.IKK)*100)/100;
    //this.ikk = xtee.IKK;
    this.aasta = xtee.prognAasta;
    this.aastax = this.aasta.replaceAll('"', "");
  }
  
}
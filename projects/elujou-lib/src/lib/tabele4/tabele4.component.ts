import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabele4-component',
  templateUrl: './tabele4.component.html',
  styleUrls: ['./tabele4.component.scss'],
  standalone: true
})
export class Tabele4Component {

  roe: number;  
  roa: number;
  pkm: number;
  akm: number;
  aasta: string;
  aastax: string;

  constructor() { 
    this.roe = Math.round((xtee.ROE)*100)/100;
    //this.roe = xtee.ROE;
    this.roa = Math.round((xtee.ROA)*100)/100;
    //this.roa = xtee.ROA;
    this.pkm = Math.round((xtee.PKM)*100)/100;
    //this.pkm = xtee.PKM;
    this.akm = Math.round((xtee.AKM)*100)/100;
    //this.akm = xtee.AKM;
    this.aasta = xtee.prognAasta;
    this.aastax = this.aasta.replaceAll('"', "");
  }
  
}
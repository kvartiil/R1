import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabele2-component',
  templateUrl: './tabele2.component.html',
  styleUrls: ['./tabele2.component.scss'],
  standalone: true
})
export class Tabele2Component {

  lvkk: number;  
  mvk: number;
  rk: number;
  aasta: string;
  aastax: string;

  constructor() { 
    this.lvkk = Math.round((xtee.LVKK)*100)/100;
    //this.lvkk = xtee.LVKK;
    this.mvk = Math.round((xtee.MVK)*100)/100;
    //this.mvk = xtee.MVK;
    this.rk = Math.round((xtee.RK)*100)/100;
    //this.rk = xtee.RK;
    this.aasta = xtee.prognAasta;
    this.aastax = this.aasta.replaceAll('"', "");
  }
  
}
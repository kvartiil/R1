import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'tabele1-component',
  templateUrl: './tabele1.component.html',
  styleUrls: ['./tabele1.component.scss'],
  standalone: true
})
export class Tabele1Component {
  
  vakk: number;  
  lvkak: number;
  vkk: number;
  aasta: string;
  aastax: string;

  constructor() { 
    this.vakk = Math.round((xtee.VaKK)*100)/100;
    //this.vakk = xtee.VaKK;
    this.lvkak = Math.round((xtee.LVKaK)*100)/100;
    //this.lvkak = xtee.LVKaK;
    this.vkk = Math.round((xtee.VKK)*100)/100;
    //this.vkk = xtee.VKK;
    this.aasta = xtee.prognAasta;
    this.aastax = this.aasta.replaceAll('"', "");
  }



}
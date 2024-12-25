import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { xtee } from '../xtee/xtee';
import { sektorid } from '../lahteinfo/sectors';
import { koostis } from './koosnemine';

//import { products } from '../products';

@Component({
  selector: 'lahteinfoback-component',
  templateUrl: './lahteinfoback.component.html',
  styleUrls: ['./lahteinfoback.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LahteinfobackComponent implements OnInit{


  title = "Analüüsi aluseks oleva tegevussektori määratlus";
  content1 = "Ettevõtte põhitegevusala (EMTAK): ";
  content2 = "Sinu ettevõtte puhul võeti aluseks tegevussektor: ";
  content3 = "Sellesse sektorisse on analüüsil paigutatud järgmised tegevusalad: ";
  content4 = "Ettevõtte suurusgrupp: ";
  content5 = "Ettevõtte tegevuspiirkond (maakond): ";
  content6 = "Majandusaasta aruande aasta, millel prognoosid põhinevad: ";

  content1a: string;
  content1b: string;
  sectorNo: string;

  constructor() { 
    this.content1a = JSON.stringify(xtee.EMTAK);
    this.content1b = this.content1+this.content1a;
    this.sectorNo = JSON.stringify(xtee.sektorNo);
  }
  
  sektorArray: any = [];
  oigeSektor: any;

  keerukam() {
    for (let key in sektorid) {
      if (sektorid.hasOwnProperty(key)) {
        this.sektorArray.push(sektorid[key]);
      }
    }
        this.oigeSektor= this.sektorArray.filter(e=>{
        return e.sektorNo === this.sectorNo;
      
    })
   
  }

  koostisArray: any = [];
  oigeSector: any;

  koostis() {
    for (let key in koostis) {
      if (koostis.hasOwnProperty(key)) {
        this.koostisArray.push(koostis[key]);
      }
    }
        this.oigeSector= this.koostisArray.filter(e=>{
        return e.sektorNo === this.sectorNo;
      
    })
    
  }

  ngOnInit() {

    this.keerukam();
    this.koostis();

  }


}
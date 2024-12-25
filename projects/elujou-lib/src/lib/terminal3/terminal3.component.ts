import { Component } from '@angular/core';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import { GraafMudelVoimComponent } from '../graafMudelVoim/graafMudelVoim.component';

//import { products } from '../products';

@Component({
  selector: 'terminal3-component',
  templateUrl: './terminal3.component.html',
  styleUrls: ['./terminal3.component.scss'],
  standalone: true,
  imports: [XteechangeComponent, GraafMudelVoimComponent]
})
export class Terminal3Component {
  
  tekst1 = 'Ettevõtte finantsvõimendus on teiste sarnaste ettevõtetega võrreldes ';
  tekst2 = '. See tähendab, et ettevõtte võime tasuda lühi- ja pikaajalisi kohustusi on ';
  tekst3 = '. Finantsvõimenduse ehk kapitali struktuuri suhtarvud näitavad, kui palju kasutab ettevõte laenukapitali ehk ettevõtte võimet tasuda lühi- ja pikaajalisi kohustusi. Laenukapitali ehk võõrkapitali hulka kuuluvad näiteks võetud laenud, ettevõtja emiteeritud ja kaubeldavad võlakohustised ning rahaturuinstrumendid.';

  muutuja1 = '';
  muutuja2 = '';
  
  koondEfektTekst = '';

  key: string = 'voimMadal';
  localValue: string = '';
  madalString: string;

  voimmadal: any;
  madalNumber: number;

  getVoimMadal() {
    this.voimmadal = new XteechangeComponent;
    this.madalNumber = this.voimmadal.model3y1;
    
    
    //this.madalString = localStorage.getItem(this.key);
    //this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'voimKeskmine';
  keskmineString: string;

  voimkeskmine: any;
  keskmineNumber: number;

  getVoimKeskmine() {
    this.voimkeskmine = new XteechangeComponent;
    this.keskmineNumber = this.voimkeskmine.model3y2;
    
    
    //this.keskmineString = localStorage.getItem(this.key2);
    //this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'voimKorge';
  korgeString: string;

  voimkorge: any;
  korgeNumber: number;

  getVoimKorge() {
    this.voimkorge = new XteechangeComponent;
    this.korgeNumber = this.voimkorge.model3y3;


    //this.korgeString = localStorage.getItem(this.key3);
    //this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }

  finantsvoimendusTekst() {
    this.getVoimMadal();
    this.getVoimKeskmine();
    this.getVoimKorge();

    if (this.madalNumber>this.keskmineNumber && this.madalNumber>this.korgeNumber) {
      this.muutuja1 = 'suurem';       
      this.muutuja2 = 'ohustatud';
    }

    else if (this.keskmineNumber>this.madalNumber && this.keskmineNumber>this.korgeNumber) {
      this.muutuja1='sama suur';
      this.muutuja2 = 'keskpärane';
    }

    else if (this.korgeNumber>this.madalNumber && this.korgeNumber>this.keskmineNumber) {
      this.muutuja1='väiksem';
      this.muutuja2 = 'tagatud';
    }

    else if (this.keskmineNumber===this.madalNumber && this.keskmineNumber===this.korgeNumber) {
      this.muutuja1='sama suur';
      this.muutuja2 = 'keskpärane';
    }
    

    
  this.koondEfektTekst = this.tekst1+this.muutuja1+this.tekst2+this.muutuja2+this.tekst3;
  
  localStorage.setItem("voimeTekst", this.koondEfektTekst);

  return this.koondEfektTekst;
}


}
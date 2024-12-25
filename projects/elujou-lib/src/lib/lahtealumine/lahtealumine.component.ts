import { Component } from '@angular/core';
import { Terminal1Component } from '../terminal1/terminal1.component';
import { Terminal2Component } from '../terminal2/terminal2.component';
import { Terminal3Component } from '../terminal3/terminal3.component';
import { Terminal4Component } from '../terminal4/terminal4.component';
import { Terminal5Component } from '../terminal5/terminal5.component';
import { NgClass } from '@angular/common';
//import { products } from '../products';

@Component({
  selector: 'lahtealumine-component',
  templateUrl: './lahtealumine.component.html',
  styleUrls: ['./lahtealumine.component.scss'],
  standalone: true,
  imports: [NgClass]
})
export class LahtealumineComponent {
  


  effComp: any;
  effComp2: any;
  makseComp: any;
  makseComp2: any;
  voimeComp: any;
  voimeComp2: any;
  tasuComp: any;
  tasuComp2: string;
  tooComp: any;
  tooComp2: string;

  constructor () {
    this.effComp = new Terminal1Component();
    this.effComp2 = this.effComp.efektiivsusTekst();
    this.makseComp = new Terminal2Component();
    this.makseComp2 = this.makseComp.maksevoimeTekst();
    this.voimeComp = new Terminal3Component;
    this.voimeComp2 = this.voimeComp.finantsvoimendusTekst();
    this.tasuComp = new Terminal4Component;
    this.tasuComp2 = this.tasuComp.tasuvusTekst();
    this.tooComp = new Terminal5Component;
    this.tooComp2 = this.tooComp.toojoudTekstValik();

  }
  
  callFun() {
    this.effComp = new Terminal1Component();
    this.effComp2.efektiivsusTekst();
    let makseComp = new Terminal2Component();
    makseComp.maksevoimeTekst();
    let voimeComp = new Terminal3Component();
    voimeComp.finantsvoimendusTekst();
    let tasuComp = new Terminal4Component();
    tasuComp.tasuvusTekst();
    let tooComp = new Terminal5Component();
    tooComp.toojoudTekst();
    //myCompOneObj.myFunctionOne()
    return this.effComp2;
  }

  key: string = 'efektTekst';
  efText: string;
 
  getEfektText() {
    this.efText = localStorage.getItem(this.key);
    return this.efText;
  }

  key2: string = 'makseTekst';
  mkText: string;
 
  getMakseText() {
    this.mkText = localStorage.getItem(this.key2);
    return this.mkText;
  }
  
  key3: string = 'voimeTekst';
  vmText: string;

  getVoimeText() {
    this.vmText = localStorage.getItem(this.key3);
    return this.vmText;
  }

  key4: string = 'tasuvusTekst';
  tsText: string;

  getTasuvusText() {
    this.tsText = localStorage.getItem(this.key4);
    return this.tsText;
  }
  
  key5: string = 'toojoudTekst';
  tjText: string;

  getToojoudText() {
    this.tjText = localStorage.getItem(this.key5);
    return this.tjText;
  }

  efectTxt: string;
  efectNo: number;

  efektVarv() {
    this.efectTxt = localStorage.getItem('efektVarv');
    this.efectNo=Number(this.efectTxt);
    return this.efectNo;
  }

  mksTxt: string;
  mksNo: number;

  makseVarv() {
    this.mksTxt = localStorage.getItem('makseVarv');
    this.mksNo=Number(this.mksTxt);
    return this.mksNo;
  }

  tjTxt: string;
  tjNo: number;

  toojoudVarv() {
    this.tjTxt = localStorage.getItem('toojoudVarv');
    this.tjNo=Number(this.tjTxt);
    return this.tjNo;
  }

  vmTxt: string;
  vmNo: number;

  voimVarv() {
    this.vmTxt = localStorage.getItem('voimVarv');
    this.vmNo=Number(this.vmTxt);
    return this.vmNo;
  }

  taTxt: string;
  taNo: number;

  tasuvVarv() {
    this.taTxt = localStorage.getItem('tasuvVarv');
    this.taNo=Number(this.taTxt);
    return this.taNo;
  }






}
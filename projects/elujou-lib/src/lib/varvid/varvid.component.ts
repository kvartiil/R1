import { Component, OnInit } from '@angular/core';
//import { xtee } from '../xtee/xtee';
import { XteechangeComponent } from '../xteechange/xteechange.component';

//import { products } from '../products';

@Component({
  selector: 'varvid-component',
  templateUrl: './varvid.component.html',
  styleUrls: ['./varvid.component.scss'],
  standalone: true,
  imports: [XteechangeComponent]
})
export class VarvidComponent implements OnInit {

  model1y1: number;
  model1y2: number;
  model1y3: number;

  effmadal: any;
  effkeskmine: any;
  effkorge: any;
  effmadalNumber: number;
  effkeskmineNumber: number;
  effkorgeNumber: number;

  maksmadal: any;
  makskeskmine: any;
  makskorge: any;
  maksmadalNumber: number;
  makskeskmineNumber: number;
  makskorgeNumber: number;

  voimmadal: any;
  voimkeskmine: any;
  voimkorge: any;
  voimmadalNumber: number;
  voimkeskmineNumber: number;
  voimkorgeNumber: number;

  tasumadal: any;
  tasukeskmine: any;
  tasukorge: any;
  tasumadalNumber: number;
  tasukeskmineNumber: number;
  tasukorgeNumber: number;

  toomadal: any;
  tookeskmine: any;
  tookorge: any;
  toomadalNumber: number;
  tookeskmineNumber: number;
  tookorgeNumber: number;

  constructor() {
    this.effmadal = new XteechangeComponent;
    this.effmadalNumber = this.effmadal.model1y1;
    this.effkeskmine = new XteechangeComponent;
    this.effkeskmineNumber = this.effkeskmine.model1y2;
    this.effkorge = new XteechangeComponent;
    this.effkorgeNumber = this.effkorge.model1y3;

    this.maksmadal = new XteechangeComponent;
    this.maksmadalNumber = this.maksmadal.model2y1;
    this.makskeskmine = new XteechangeComponent;
    this.makskeskmineNumber = this.makskeskmine.model2y2;
    this.makskorge = new XteechangeComponent;
    this.makskorgeNumber = this.makskorge.model2y3;

    this.voimmadal = new XteechangeComponent;
    this.voimmadalNumber = this.voimmadal.model3y1;
    this.voimkeskmine = new XteechangeComponent;
    this.voimkeskmineNumber = this.voimkeskmine.model3y2;
    this.voimkorge = new XteechangeComponent;
    this.voimkorgeNumber = this.voimkorge.model3y3;

    this.tasumadal = new XteechangeComponent;
    this.tasumadalNumber = this.tasumadal.model4y1;
    this.tasukeskmine = new XteechangeComponent;
    this.tasukeskmineNumber = this.tasukeskmine.model4y2;
    this.tasukorge = new XteechangeComponent;
    this.tasukorgeNumber = this.tasukorge.model4y3;

    this.toomadal = new XteechangeComponent;
    this.toomadalNumber = this.toomadal.model5y1;
    this.tookeskmine = new XteechangeComponent;
    this.tookeskmineNumber = this.tookeskmine.model5y2;
    this.tookorge = new XteechangeComponent;
    this.tookorgeNumber = this.tookorge.model5y3;

  }

ngOnInit() {
  this.kirjutaVarvid();
  this.kirjutaValdkond();
}

  //varvid
  //thresholdConfig = {
  //  '0': {color: '#EFB2B2'},
  //  '0.4': {color: '#FFE1A0'},
  //  '0.6': {color: '#ACCFBA'}
  //};
  kirjutaValdkond() {


  }


  kirjutaVarvid() {
    if (this.effmadalNumber > this.effkeskmineNumber && this.effmadalNumber > this.effkorgeNumber  ) {
      localStorage.setItem("efektVarv", '1');
    }
    if (this.effkeskmineNumber > this.effmadalNumber && this.effkeskmineNumber > this.effkorgeNumber  ) {
      localStorage.setItem("efektVarv", '2');
    }
    if (this.effkorgeNumber > this.effkeskmineNumber && this.effkorgeNumber > this.effmadalNumber  ) {
      localStorage.setItem("efektVarv", '3');
    }

    if (this.maksmadalNumber > this.makskeskmineNumber && this.maksmadalNumber > this.makskorgeNumber  ) {
      localStorage.setItem("makseVarv", '1');
    }
    if (this.makskeskmineNumber > this.maksmadalNumber && this.makskeskmineNumber > this.makskorgeNumber  ) {
      localStorage.setItem("makseVarv", '2');
    }
    if (this.makskorgeNumber > this.makskeskmineNumber && this.makskorgeNumber > this.maksmadalNumber  ) {
      localStorage.setItem("makseVarv", '3');
    }

    if (this.voimmadalNumber > this.voimkeskmineNumber && this.voimmadalNumber > this.voimkorgeNumber  ) {
      localStorage.setItem("voimVarv", '1');
    }
    if (this.voimkeskmineNumber > this.voimmadalNumber && this.voimkeskmineNumber > this.voimkorgeNumber  ) {
      localStorage.setItem("voimVarv", '2');
    }
    if (this.voimkorgeNumber > this.voimkeskmineNumber && this.voimkorgeNumber > this.voimmadalNumber  ) {
      localStorage.setItem("voimVarv", '3');
    }

    if (this.tasumadalNumber > this.tasukeskmineNumber && this.tasumadalNumber > this.tasukorgeNumber  ) {
      localStorage.setItem("tasuvVarv", '1');
    }
    if (this.tasukeskmineNumber > this.tasumadalNumber && this.tasukeskmineNumber > this.tasukorgeNumber  ) {
      localStorage.setItem("tasuvVarv", '2');
    }
    if (this.tasukorgeNumber > this.tasukeskmineNumber && this.tasukorgeNumber > this.tasumadalNumber  ) {
      localStorage.setItem("tasuvVarv", '3');
    }

    if (this.toomadalNumber > this.tookeskmineNumber && this.toomadalNumber > this.tookorgeNumber  ) {
      localStorage.setItem("toojoudVarv", '1');
    }
    if (this.tookeskmineNumber > this.toomadalNumber && this.tookeskmineNumber > this.tookorgeNumber  ) {
      localStorage.setItem("toojoudVarv", '2');
    }
    if (this.tookorgeNumber > this.tookeskmineNumber && this.tookorgeNumber > this.toomadalNumber  ) {
      localStorage.setItem("toojoudVarv", '3');
    }
 
    if (isNaN(this.toomadalNumber)) {
      localStorage.setItem("toojoudVarv", '4');
    }

  }


  
}

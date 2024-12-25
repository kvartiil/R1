import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElujouLib2Component } from '../lib/elujou-lib2/elujou-lib2.component';
import { UustestComponent } from '../lib/elujou-uustest/elujou-uustest.component';
import { TabComponent } from '../lib/tabx/tabx.component';
import { TabzComponent } from '../lib/tabz/tabz.component';
import { XteechangeComponent } from '../lib/xteechange/xteechange.component';

@Component({
  selector: 'lib-elujou-lib',
  standalone: true,
  templateUrl: './elujou-lib.component.html',
  styleUrls: ['./elujou-lib.component.scss'],
  imports: [CommonModule, ElujouLib2Component, UustestComponent, TabComponent, TabzComponent, XteechangeComponent]
  //declarations: [ElujouLib2Component]

  //imports: [], 
  //template: `
  //  <p>
  //    See, mis RIIALE vaja!!!!
  //  </p>
//  `,
//styles: ``
})
export class ElujouLibComponent {

muutuja = "esimene muutuja";

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

ekraanimuutuja = 1;
ekraanimuutuja2 =1;

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

  if (isNaN(this.effmadalNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.effkeskmineNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.effkorgeNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.maksmadalNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.makskeskmineNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.makskorgeNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.voimmadalNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.voimkeskmineNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.voimkorgeNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.tasumadalNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.tasukeskmineNumber)) {
    this.ekraanimuutuja = NaN;
  }

  if (isNaN(this.tasukorgeNumber)) {
    this.ekraanimuutuja = NaN;
  }

}
//if (isNaN(this.toomadalNumber)) {
//  localStorage.setItem("toojoudVarv", '4');
//}

}

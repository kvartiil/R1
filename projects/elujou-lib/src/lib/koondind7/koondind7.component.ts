import { Component } from '@angular/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { xtee } from '../xtee/xtee';
import { XteechangeComponent } from '../xteechange/xteechange.component';

//declare var d3: any;

@Component({
  selector: 'koondind7-component',
  templateUrl: './koondind7.component.html',
  styleUrls: ['./koondind7.component.scss'],
  standalone: true,
  imports: [NgxGaugeModule, XteechangeComponent]
})
export class Koondind7Component {

  effpsect: number;  
  value: number;
  value2: string;
  value3: number;
  //value = 0.3;
  thick = 40;
  label = "Elujõud"
  gaugeAppendText=""
  max=100;
  min=0;
  gaugeDuration = 1000;
  gaugeAnimate = false;
  thresholdConfig = {
  '0': {color: '#EFB2B2'},
  '40': {color: '#FFE1A0'},
  '60': {color: '#ACCFBA'}
};
///markers = { "50": { color: "#555", type: "triangle", size: 8, label: "Keskmine", font: "14px ari,al" }, "22": { color: "#555", type: "triangle", size: 8, label: "Madal", font: "14px arial" }, "78": { color: "#555", type: "triangle", size: 8, label: "Kõrge", font: "14px arial" } };

/// vahepealne markers = {"40": { color: "#555", type: "triangle", size: 8, label: "Madal (40)", font: "14px arial" }, "60": { color: "#555", type: "triangle", size: 8, label: "Kõrge (60)", font: "14px arial" } };


/// X1 markers = {"20": { color: "#555", type: "line", size: 8, label: "Madal", font: "14px arial" }, "40": { color: "#555", type: "triangle", size: 8, label: "40", font: "14px arial" }, "60": { color: "#555", type: "triangle", size: 8, label: "60", font: "14px arial" }, "80": { color: "#555", size: 8, label: "Kõrge", font: "14px arial" } };


/// X2 markers = {"20": { color: "#555", type: "line", size: 8, label: "Madal", font: "14px arial" }, "40": { color: "#555", type: "triangle", size: 8, label: "40", font: "14px arial" },  "50": { color: "#555", type: "line", size: 8, label: "Keskmine", font: "14px arial" }, "60": { color: "#555", type: "triangle", size: 8, label: "60", font: "14px arial" }, "80": { color: "#555", size: 8, label: "Kõrge", font: "14px arial" } };

/// X3 markers = {"20": { color: "#555", type: "line", size: 8, label: "Madal", font: "14px arial" }, "40": { color: "#555", type: "triangle", size: 8, font: "14px arial" },  "50": { color: "#555", type: "line", size: 8, label: "Keskmine", font: "14px arial" }, "60": { color: "#555", type: "triangle", size: 8, font: "14px arial" }, "80": { color: "#555", size: 8, label: "Kõrge", font: "14px arial" } };

markers = {"20": { color: "#555", type: "line", size: 8, label: "Madal", font: "14px arial" }, "40": { color: "#555", type: "triangle", size: 8, font: "14px arial" }, "60": { color: "#555", type: "triangle", size: 8, font: "14px arial" }, "80": { color: "#555", size: 8, label: "Kõrge", font: "14px arial" } };


madalString: string;
key: string = 'efektMadal';
localValue: string = '';
madalNumber: number;

getEfektMadal() {
  ////this.madalString = localStorage.getItem(this.key);
  ////this.madalNumber=Number(this.madalString);
  this.madalNumber=0.1;
  return this.madalNumber;
}

//value = this.getEfektMadal();

key3: string = 'efektKorge';
  korgeString: string;
  korgeNumber: number;

  getEfektKorge() {
   //// this.korgeString = localStorage.getItem(this.key3);
   //// this.korgeNumber=Number(this.korgeString);
    this.korgeNumber=0.2;
    return this.korgeNumber;
  }

  key3m: string = 'makseKorge';
  korgeStringm: string;
  korgeNumberm: number;

  getMakseKorge() {
    ////this.korgeStringm = localStorage.getItem(this.key3m);
    ////this.korgeNumberm=Number(this.korgeStringm);
    this.korgeNumberm=0.3;
    return this.korgeNumberm;
  }  

  key3v: string = 'voimKorge';
  korgeStringv: string;
  korgeNumberv: number;

  getVoimKorge() {
    ////this.korgeStringv = localStorage.getItem(this.key3v);
    ///this.korgeNumberv=Number(this.korgeStringv);
    this.korgeNumberv=0.34;
    return this.korgeNumberv;
  }

  key3t: string = 'tasuvKorge';
  korgeStringt: string;
  korgeNumbert: number;

  getTasuvKorge() {
    ////this.korgeStringt = localStorage.getItem(this.key3t);
    ////this.korgeNumbert=Number(this.korgeStringt);
    this.korgeNumbert=0.5;
    return this.korgeNumbert;
  }

  key3j: string = 'toojoudKorge';
  korgeStringj: string;
  korgeNumberj: any;
  //vahenumber: any;

  getToojoudKorge() {
    ////this.korgeStringj = localStorage.getItem(this.key3j);
    ////this.korgeNumberj=Number(this.korgeStringj);
    ////this.korgeNumberj=this.korgeNumberj;
    this.korgeNumberj=0.9;
    //this.vahenumber = this.korgeNumberj.toFixed(2); 
    return this.korgeNumberj;
  }  

ww = 33.3435.toFixed(2);
www = (Math.round(0.2498347 * 100) / 100).toFixed(2);

testmuutuja: string;

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

constructor(){

////SIIA TULEB VALEM TEHA
///Kui teha iga komponendi kohta (1- madala tõenäosus + kõrge tõenäosus)/2 
///koond1 = ((1-p_1_likviidsus_mada+ p_1_likviidsus_korg)/2+
///(1-p_2_efektiivsus_mada+ p_2_efektiivsus_korg)/2+
///(1-p_3_struktuur_mada+ p_3_struktuur_korg)/2+
///(1-p_4_tasuvus_mada+ p_4_tasuvus_korg)/2)/4

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
 
if (xtee.model5y1) {
  this.testmuutuja = "on olemas";
  this.value=(((((1-this.effmadalNumber)+this.effkorgeNumber)/2)+(((1-this.maksmadalNumber)+this.makskorgeNumber)/2)+(((1-this.voimmadalNumber)+this.voimkorgeNumber)/2)+(((1-this.tasumadalNumber)+this.tasukorgeNumber)/2)+(((1-this.toomadalNumber)+this.tookorgeNumber)/2))/5)*100;
  ////this.value = 10.3;
  ////this.value = Math.round(this.value);
  localStorage.setItem("elujoud", JSON.stringify(this.value));
}
else {
  //this.testmuutuja = "on olemas";
  this.value=(((((1-this.effmadalNumber)+this.effkorgeNumber)/2)+(((1-this.maksmadalNumber)+this.makskorgeNumber)/2)+(((1-this.voimmadalNumber)+this.voimkorgeNumber)/2)+(((1-this.tasumadalNumber)+this.tasukorgeNumber)/2))/4)*100;
  this.testmuutuja = "ei ole olemas";
  localStorage.setItem("elujoud", JSON.stringify(this.value));
  //this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2))/4;
}


//this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)//+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2)+(((1-xtee.model5y1)+xtee.model5y3))/2)/5;

//this.value = Math.round((this.value)*100*10)/1000;

//this.value = Math.round(((this.value)*100) | 0)/100;

this.value2 = (this.value).toFixed(2);
this.value3 = Number(this.value2);

///console.log(((1-xtee.model1y1)+xtee.model1y3));
///console.log(((1-xtee.model2y1)+xtee.model2y3));
///console.log(((1-xtee.model3y1)+xtee.model3y3));
///console.log(((1-xtee.model4y1)+xtee.model4y3));
///console.log(((1-xtee.model5y1)+xtee.model5y3));

///console.log('katsettus',(1-xtee.model2y1));



///  this.value = xtee.EffpSect;

  ///setInterval (() => {
          //this.value = Math.floor((Math.random() * 2000) + 1);
         // this.value = (this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5;
  ///  }, 7000);
}


}
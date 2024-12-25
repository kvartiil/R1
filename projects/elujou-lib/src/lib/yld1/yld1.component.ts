import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Koondind7Component } from '../koondind7/koondind7.component';
import { xtee } from '../xtee/xtee';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import { LahteturnComponent } from '../lahteturn/lahteturn.component';
import { KelleleinfoComponent } from '../kelleleinfo/kelleleinfo.component';
import { KesinfotComponent } from '../kesinfot/kesinfot.component';

//import { products } from '../products';

@Component({
  selector: 'yld1-component',
  templateUrl: './yld1.component.html',
  standalone: true,
  styleUrls: ['./yld1.component.scss'],
  imports: [Koondind7Component, XteechangeComponent, LahteturnComponent, CommonModule, KelleleinfoComponent, KesinfotComponent]
})
export class Yld1Component {
  
  key3: string = 'efektKorge';
  korgeString: string;
  korgeNumber: number;

  getEfektKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }

  key3m: string = 'makseKorge';
  korgeStringm: string;
  korgeNumberm: number;

  getMakseKorge() {
    this.korgeStringm = localStorage.getItem(this.key3m);
    this.korgeNumberm=Number(this.korgeStringm);
    return this.korgeNumberm;
  }  

  key3v: string = 'voimKorge';
  korgeStringv: string;
  korgeNumberv: number;

  getVoimKorge() {
    this.korgeStringv = localStorage.getItem(this.key3v);
    this.korgeNumberv=Number(this.korgeStringv);
    return this.korgeNumberv;
  }

  key3t: string = 'tasuvKorge';
  korgeStringt: string;
  korgeNumbert: number;

  getTasuvKorge() {
    this.korgeStringt = localStorage.getItem(this.key3t);
    this.korgeNumbert=Number(this.korgeStringt);
    return this.korgeNumbert;
  }

  key3j: string = 'toojoudKorge';
  korgeStringj: string;
  korgeNumberj: number;

  getToojoudKorge() {
    this.korgeStringj = localStorage.getItem(this.key3j);
    this.korgeNumberj=Number(this.korgeStringj);
    return this.korgeNumberj;
  }  

  hinnang: string;
  value: number;

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

testmuutuja: string;




  constructor () {

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
      this.value=((((1-this.effmadalNumber)+this.effkorgeNumber)/2)+(((1-this.maksmadalNumber)+this.makskorgeNumber)/2)+(((1-this.voimmadalNumber)+this.voimkorgeNumber)/2)+(((1-this.tasumadalNumber)+this.tasukorgeNumber)/2)+(((1-this.toomadalNumber)+this.tookorgeNumber)/2))/5;
    }
    else {
      //this.testmuutuja = "on olemas";
      this.value=((((1-this.effmadalNumber)+this.effkorgeNumber)/2)+(((1-this.maksmadalNumber)+this.makskorgeNumber)/2)+(((1-this.voimmadalNumber)+this.voimkorgeNumber)/2)+(((1-this.tasumadalNumber)+this.tasukorgeNumber)/2))/4;
      this.testmuutuja = "ei ole olemas";
      //this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2))/4;
    }
    



  //this.value=((((1-xtee.model1y1)+xtee.model1y3)/2)+(((1-xtee.model2y1)+xtee.model2y3)/2)+(((1-xtee.model3y1)+xtee.model3y3)/2)+(((1-xtee.model4y1)+xtee.model4y3)/2)+(((1-xtee.model5y1)+xtee.model5y3))/2)/5;
  }

  annaHinnang() {

    this.hinnang = "laheda elujõulisusega"
    
    if (this.value>0.6) {
         this.hinnang = "kõrge"
       }
    
    else if (this.value>0.4) {
        this.hinnang = "keskmine"
        }   
    
    else if (this.value<=0.4) {
        this.hinnang = "madal"
        }    


   // if ((this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5>0.67999) {
   //   this.hinnang = "suur"
   // }
   // else if ((this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5<=0.67999 && (this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5>0.34) {
   //   this.hinnang = "keskmine"
   // }
   // else if ((this.getEfektKorge()+this.getMakseKorge()+this.getVoimKorge()+this.getTasuvKorge()+this.getToojoudKorge())/5<=0.34) {
   //   this.hinnang = "väike"
   // }

    return this.hinnang;
  }

  panussissejuhatus: string;

  panusEellugu() {
    this.panussissejuhatus = 'Praegusel juhul tuleb panus saadud tulemusse peamiselt';

    if (this.effkorgeNumber<=0.5 && this.makskorgeNumber<=0.5 && this.voimkorgeNumber<=0.5 && this.tasukorgeNumber<=0.5 && this.tookorgeNumber<=0.5) {
      this.panussissejuhatus = 'Rakendus ei leidnud ühtegi olulist komponenti, mis elujõulisust tõstaks.'
    }

    return this.panussissejuhatus;
  }

  panusEellugu2() {
    this.panussissejuhatus = 'Praegusel juhul tuleb panus saadud tulemusse peamiselt';

    if (this.effkorgeNumber<=0.5 && this.makskorgeNumber<=0.5 && this.voimkorgeNumber<=0.5 && this.tasukorgeNumber<=0.5) {
      this.panussissejuhatus = 'Rakendus ei leidnud ühtegi olulist komponenti, mis elujõulisust tõstaks.'
    }

    return this.panussissejuhatus;
  }

  valikTekst: string;
  panusEelluguValik() {

    if (! isNaN(this.toomadalNumber)) {
      this.valikTekst = this.panusEellugu();
    }

    else if (isNaN(this.toomadalNumber)) {
      this.valikTekst = this.panusEellugu2();
    }
    return this.valikTekst;
  }


  panus: string;

  panusTuleb() {

    this.panus = '';

    if (this.effkorgeNumber>this.makskorgeNumber && this.effkorgeNumber>this.voimkorgeNumber && this.effkorgeNumber>this.tasukorgeNumber && this.effkorgeNumber>this.tookorgeNumber && this.effkorgeNumber > 0.5) {
      this.panus = ' suhteliselt kõrgest efektiivsusest.';
    }

    else if (this.makskorgeNumber>this.voimkorgeNumber && this.makskorgeNumber>this.tasukorgeNumber && this.makskorgeNumber>this.tookorgeNumber && this.makskorgeNumber > 0.5) {
      this.panus = ' suhteliselt kõrgest maksevõimest.'
    }

    else if (this.voimkorgeNumber>this.tasukorgeNumber && this.voimkorgeNumber>this.tookorgeNumber && this.voimkorgeNumber > 0.5) {
      this.panus = ' suhteliselt madalast finantsvõimendusest.'
    }

    else if (this.tasukorgeNumber>this.tookorgeNumber && this.tasukorgeNumber > 0.5) {
      this.panus = ' suhteliselt kõrgest tasuvusest.'
    }

    else if (this.tookorgeNumber > 0.5) {
      this.panus = ' suhteliselt kõrgest tööjõu tootlikkuse kasvust.'
    }

    return this.panus;
  }

  panusTuleb2() {

    this.panus = '';

    if (this.effkorgeNumber>this.makskorgeNumber && this.effkorgeNumber>this.voimkorgeNumber && this.effkorgeNumber>this.tasukorgeNumber && this.effkorgeNumber > 0.5) {
      this.panus = ' suhteliselt kõrgest efektiivsusest.';
    }

    else if (this.makskorgeNumber>this.voimkorgeNumber && this.makskorgeNumber>this.tasukorgeNumber && this.makskorgeNumber > 0.5) {
      this.panus = ' suhteliselt kõrgest maksevõimest.'
    }

    else if (this.voimkorgeNumber>this.tasukorgeNumber && this.voimkorgeNumber > 0.5) {
      this.panus = ' suhteliselt madalast finantsvõimendusest.'
    }

    else if (this.tasukorgeNumber > 0.5) {
      this.panus = ' suhteliselt kõrgest tasuvusest.'
    }

    return this.panus;
  }

  valikPanus: string;
  kontroll: string;
  panusTulebValik() {

    if (! isNaN(this.toomadalNumber)) {
      this.valikPanus = this.panusTuleb();
      //this.kontroll = "panusTuleb";
    }

    else if (isNaN(this.toomadalNumber)) {
      this.valikPanus = this.panusTuleb2();
      //this.kontroll = "panusTuleb2";
    }
    return this.valikPanus;
  }



  tugevused: string;
  tugevusedX: string;
  
  tugevus1: string;
  tugevus2: string;
  tugevus3: string;
  tugevus4: string;
  tugevus5: string;
  lisaTargutus() {
    this.tugevusedX = " Ükski näitaja ei ole eraldi võetuna oluliselt esileulatuv. Olenemata koondtulemusest on ettevõtte olukord probleemne."
    this.tugevus1 = '';
    this.tugevus2 = '';
    this.tugevus3 = '';
    this.tugevus4 = '';
    this.tugevus5 = '';

    if (this.effkorgeNumber > 0.95) {
      this.tugevus1 = ' Erakordselt kõrge on efektiivsus, mis tähendab vara tõhusat kasutamist.';
      this.tugevusedX = '';
    }

    if (this.makskorgeNumber > 0.95) {
      this.tugevus2 = ' Väga kõrge on maksevõime, mis tähendab rahavoogude edukat juhtimist.';
      this.tugevusedX = '';
    }

    if (this.voimkorgeNumber > 0.95) {
      this.tugevus3 = ' Väga positiivne on suhteliselt madal laenukoormuse osakaal.';
      this.tugevusedX = '';
    }

    if (this.tasukorgeNumber > 0.95) {
      this.tugevus4 = ' Oluline tugi on kõrge tasuvus, mis tähendab head turuseisu.';
      this.tugevusedX = '';
    }

    if (this.tookorgeNumber > 0.95) {
      this.tugevus5 = ' Ettevõtte tööjõu tootlikkuse kasv on väga hea, sellest on arengus palju kasu.';
      this.tugevusedX = '';
    }

    this.tugevused = this.tugevusedX+this.tugevus1+this.tugevus2+this.tugevus3+this.tugevus4+this.tugevus5;

    return this.tugevused;
  }

  lisaTargutus2() {
    this.tugevusedX = " Ükski näitaja ei ole eraldi võetuna oluliselt esileulatuv. Olenemata koondtulemusest on ettevõtte olukord probleemne."
    this.tugevus1 = '';
    this.tugevus2 = '';
    this.tugevus3 = '';
    this.tugevus4 = '';
    this.tugevus5 = '';

    if (this.effkorgeNumber > 0.95) {
      this.tugevus1 = ' Erakordselt kõrge on efektiivsus, mis tähendab vara tõhusat kasutamist.';
      this.tugevusedX = '';
    }

    if (this.makskorgeNumber > 0.95) {
      this.tugevus2 = ' Väga kõrge on maksevõime, mis tähendab rahavoogude edukat juhtimist.';
      this.tugevusedX = '';
    }

    if (this.voimkorgeNumber > 0.95) {
      this.tugevus3 = ' Väga positiivne on suhteliselt madal laenukoormuse osakaal.';
      this.tugevusedX = '';
    }

    if (this.tasukorgeNumber > 0.95) {
      this.tugevus4 = ' Oluline tugi on kõrge tasuvus, mis tähendab head turuseisu.';
      this.tugevusedX = '';
    }

    this.tugevused = this.tugevusedX+this.tugevus1+this.tugevus2+this.tugevus3+this.tugevus4;

    return this.tugevused;
  }

  valikTargutus: string;
  lisaTargutusValik() {

    if (! isNaN(this.toomadalNumber)) {
      this.valikTargutus = this.lisaTargutus();
    }

    else if (isNaN(this.toomadalNumber)) {
      this.valikTargutus = this.lisaTargutus2();
    }
    return this.valikTargutus;
  }


maakonnaKontroll() {
  if (localStorage.getItem("maakond") === null) {
    localStorage.setItem("maakond", "Harju maakond");
  }
}
ReadMore:boolean = true
visible:boolean = false

onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible;
    //alert("lgaj");
  }

  ReadMore2:boolean = true
  visible2:boolean = false
  
  onclick2()
  {
    this.ReadMore2 = !this.ReadMore2; //not equal to condition
    this.visible2 = !this.visible2;
    //alert("lgaj");
  }

  ReadMore3:boolean = true
  visible3:boolean = false
  
  onclick3()
  {
    this.ReadMore3 = !this.ReadMore3; //not equal to condition
    this.visible3 = !this.visible3;
    //alert("lgaj");
  }

jutuke: string;

  lantau() {

    this.jutuke = "lsjf";
    return this.jutuke;
  }

  flipped = false;
  //imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"

  toggle() {
    this.flipped = !this.flipped;
  }


}
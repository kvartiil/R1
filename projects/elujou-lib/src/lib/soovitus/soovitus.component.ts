import { Component } from '@angular/core';
import { XteechangeComponent } from '../xteechange/xteechange.component';

//import { products } from '../products';

@Component({
  selector: 'soovitus-component',
  templateUrl: './soovitus.component.html',
  styleUrls: ['./soovitus.component.scss'],
  standalone: true,
  imports: [XteechangeComponent]
})
export class SoovitusComponent {

    
  koondSoovitus = '';
  koondSoovitusm = '';
  koondSoovitusv = '';
  koondSoovitust = '';
  koondSoovitusj = '';
  muutujaBlanco = ' ';
  muutujaEfekt = '';
  muutujaMaks = 'maksuke';
  muutujaVoim = 'voimuke';
  muutujaTasuv = 'tasuvuseke';
  muutujaToojoud = '';

  key: string = 'efektMadal';
  localValue: string = '';
  madalString: string;
  madalNumber: number;


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

}

getEfektMadal() {
    this.madalString = localStorage.getItem(this.key);
    this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'efektKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getEfektKeskmine() {
    this.keskmineString = localStorage.getItem(this.key2);
    this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'efektKorge';
  korgeString: string;
  korgeNumber: number;

  getEfektKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }


  soovitusTekst() {
    //this.getEfektMadal();
    //this.getEfektKeskmine();
    //this.getEfektKorge();
    
    if (this.effmadalNumber>this.effkeskmineNumber && this.effmadalNumber>this.effkorgeNumber) {
      this.muutujaEfekt = 'Efektiivsus on madal, seega on oluline kasvatada müügitulu osakaalu varades. Praegu kasutatakse varasse investeeritud vahendeid ebaefektiivselt.';       
    }

    else if (this.effkeskmineNumber>this.effmadalNumber && this.effkeskmineNumber>this.effkorgeNumber) {
      this.muutujaEfekt='Efektiivsus on keskmine, abi oleks sellest, kui müügitulu osakaal varades kasvaks, kuid see ei ole ilmtingimata vajalik.';
      //this.muutuja2 = 'sama efektiivselt';
    }

    else if (this.effkorgeNumber>this.effmadalNumber && this.effkorgeNumber>this.effkeskmineNumber) {
      this.muutujaEfekt='Efektiivsusega on praeguse hinnangu kohaselt kõik korras: see tähendab, et varasse investeeritud vahendeid kasutatakse efektiivselt.';
      //this.muutuja2 = 'efektiivsemalt';
    }

    else if (this.effkeskmineNumber===this.effmadalNumber && this.effkeskmineNumber===this.effkorgeNumber) {
      this.muutujaEfekt='Efektiivsus on keskmine, abi oleks sellest, kui müügitulu osakaal varades kasvaks, kuid see ei ole ilmtingimata vajalik.';
      //this.muutuja2 = 'sama efektiivselt';
    }

   
    
  this.koondSoovitus = this.muutujaEfekt;
  
  return this.koondSoovitus;
}


  keym: string = 'makseMadal';
  localValuem: string = '';
  madalStringm: string;
  madalNumberm: number;

  getMakseMadal() {
    this.madalStringm = localStorage.getItem(this.keym);
    this.madalNumberm=Number(this.madalStringm);
    return this.madalNumberm;
  }

  key2m: string = 'makseKeskmine';
  keskmineStringm: string;
  keskmineNumberm: number;

  getMakseKeskmine() {
    this.keskmineStringm = localStorage.getItem(this.key2m);
    this.keskmineNumberm=Number(this.keskmineStringm);
    return this.keskmineNumberm;
  }

  key3m: string = 'makseKorge';
  korgeStringm: string;
  korgeNumberm: number;

  getMakseKorge() {
    this.korgeStringm = localStorage.getItem(this.key3m);
    this.korgeNumberm=Number(this.korgeStringm);
    return this.korgeNumberm;
  }

  soovitusTekstm () {

    //this.getMakseMadal();
    //this.getMakseKeskmine();
    //this.getMakseKorge();

    if (this.maksmadalNumber>this.makskeskmineNumber && this.maksmadalNumber>this.makskorgeNumber) {
      this.muutujaMaks = 'Maksevõime on madal, ettevõttel ei ole piisavalt raha võlgnevuste tasumiseks. Oluline oleks suurendada likviidse vara suhtelist mahtu lühiajaliste kohustustega võrreldes.';       
    }

    else if (this.makskeskmineNumber>this.maksmadalNumber && this.makskeskmineNumber>this.makskorgeNumber) {
      this.muutujaMaks='Maksevõime on keskmine, ettevõte tuleb oma võlgnevuste tasumisega toime, kuid soovitame mõelda likviidse vara kasvatamisele.';
      //this.muutuja2 = 'sama efektiivselt';
    }

    else if (this.makskorgeNumber>this.maksmadalNumber && this.makskorgeNumber>this.makskeskmineNumber) {
      this.muutujaMaks='Ettevõttel ei ole maksevõimega probleeme, lühiajalise kohustuste tasumisega tullakse edukalt toime. Maksevõime muudatusi ette võtta ei ole vaja.';
      //this.muutuja2 = 'efektiivsemalt';
    }

    else if (this.makskeskmineNumber===this.maksmadalNumber && this.makskeskmineNumber===this.makskorgeNumber) {
      this.muutujaMaks='Maksevõime on keskmine, ettevõte tuleb oma võlgnevuste tasumisega toime, kuid soovitame mõelda likviidse vara kasvatamisele.';
      //this.muutuja2 = 'sama efektiivselt';
    }

    this.koondSoovitusm = this.muutujaBlanco+this.muutujaMaks;
  
    return this.koondSoovitusm;

  }

  keyf: string = 'voimMadal';
  localValuef: string = '';
  madalStringf: string;
  madalNumberf: number;

  getVoimMadal() {
    this.madalStringf = localStorage.getItem(this.keyf);
    this.madalNumberf=Number(this.madalStringf);
    return this.madalNumberf;
  }

  key2f: string = 'voimKeskmine';
  keskmineStringf: string;
  keskmineNumberf: number;

  getVoimKeskmine() {
    this.keskmineStringf = localStorage.getItem(this.key2f);
    this.keskmineNumberf=Number(this.keskmineStringf);
    return this.keskmineNumberf;
  }

  key3f: string = 'voimKorge';
  korgeStringf: string;
  korgeNumberf: number;

  getVoimKorge() {
    this.korgeStringf = localStorage.getItem(this.key3f);
    this.korgeNumberf=Number(this.korgeStringf);
    return this.korgeNumberf;
  }

  finantsvoimendusTekst() {
    //this.getVoimMadal();
    //this.getVoimKeskmine();
    //this.getVoimKorge();

    if (this.voimmadalNumber>this.voimkeskmineNumber && this.voimmadalNumber>this.voimkorgeNumber) {
      this.muutujaVoim = 'Ettevõtte kohustuste maht on suur, võib-olla kriitiliselt suur. See tähendab, et kohustuste katmisel võib probleeme tekkida. Soovitame mõelda sellele, kuidas kasvatada kapitali ja likviidsust, et kohustustega toime tulla.';       
      //this.muutuja2 = 'ohustatud';
    }

    else if (this.voimkeskmineNumber>this.voimmadalNumber && this.voimkeskmineNumber>this.voimkorgeNumber) {
      this.muutujaVoim='Ettevõtte kohustuste maht on mõõdukas, puudub otsene oht kohustustega hätta jääda. Siiski tuleb lisalaenu või muude uute rahaliste kohustuste võtmisel olla väga ettevaatlik.';
      //this.muutuja2 = 'keskpärane';
    }

    else if (this.voimkorgeNumber>this.voimmadalNumber && this.voimkorgeNumber>this.voimkeskmineNumber) {
      this.muutujaVoim='Ettevõttel on vähe kohustusi, nende katmisega tullakse edukalt toime. Olemas on reserv selleks, et ettevõte saaks kasutada täiendavat finantsvõimendust äritegevuse kasvatamiseks.';
      //this.muutuja2 = 'tagatud';
    }

    else if (this.voimkeskmineNumber===this.voimmadalNumber && this.voimkeskmineNumber===this.voimkorgeNumber) {
      this.muutujaVoim='Ettevõtte kohustuste maht on mõõdukas, puudub otsene oht kohustustega hätta jääda. Siiski tuleb lisalaenu või muude uute rahaliste kohustuste võtmisel olla väga ettevaatlik.';
      //this.muutuja2 = 'keskpärane';
    }
    

    
  this.koondSoovitusv = this.muutujaBlanco+this.muutujaVoim;
  
  return this.koondSoovitusv;
}

keyt: string = 'tasuvMadal';
  localValuet: string = '';
  madalStringt: string;
  madalNumbert: number;

  getTasuvMadal() {
    this.madalStringt = localStorage.getItem(this.keyt);
    this.madalNumbert=Number(this.madalStringt);
    return this.madalNumbert;
  }

  key2t: string = 'tasuvKeskmine';
  keskmineStringt: string;
  keskmineNumbert: number;

  getTasuvKeskmine() {
    this.keskmineStringt = localStorage.getItem(this.key2t);
    this.keskmineNumbert=Number(this.keskmineStringt);
    return this.keskmineNumbert;
  }

  key3t: string = 'tasuvKorge';
  korgeStringt: string;
  korgeNumbert: number;

  getTasuvKorge() {
    this.korgeStringt = localStorage.getItem(this.key3t);
    this.korgeNumbert=Number(this.korgeStringt);
    return this.korgeNumbert;
  }

  tasuvusTekst() {
    //this.getTasuvMadal();
    //this.getTasuvKeskmine();
    //this.getTasuvKorge();

    if (this.tasumadalNumber>this.tasukeskmineNumber && this.tasumadalNumber>this.tasukorgeNumber) {
      this.muutujaTasuv = 'Ettevõtte tasuvus on madal, ettevõttel ei ole piisavalt käivet, et varadesse investeeritud raha ennast ära tasuks. Oluline on mõelda käibe suurendamise võimalustele või ettevõtte vara vähendamisele.';       
      //this.muutuja2 = 'väike';
      //this.muutuja3 = 'väike';
    }

    else if (this.tasukeskmineNumber>this.tasumadalNumber && this.tasukeskmineNumber>this.tasukorgeNumber) {
      this.muutujaTasuv='Ettevõtte tasuvus on keskmine, käive võimaldab turul püsida ja vara taastoota, kuid hea oleks mõelda lisaturu peale.';
      //this.muutuja2 = 'keskpärane';
      //this.muutuja3 = 'keskpärane';
    }

    else if (this.tasukorgeNumber>this.tasumadalNumber && this.tasukorgeNumber>this.tasukeskmineNumber) {
      this.muutujaTasuv='Ettevõtte tasuvus on kõrge, ettevõte toob piisavalt raha sisse ja seega on käive tegevusvahenditesse paigutatud raha arvestades piisav.';
      //this.muutuja2 = 'suur';
      //this.muutuja3 = 'suur';
    }

    else if (this.tasukeskmineNumber===this.tasumadalNumber && this.tasukeskmineNumber===this.tasukorgeNumber) {
      this.muutujaTasuv='Ettevõtte tasuvus on keskmine, käive võimaldab turul püsida ja vara taastoota, kuid hea oleks mõelda lisaturu peale.';
      //this.muutuja2 = 'keskpärane';
      //this.muutuja3 = 'keskpärane';
    }
    

    
  this.koondSoovitust = this.muutujaBlanco+this.muutujaTasuv;
  
  return this.koondSoovitust;
}

keyj: string = 'toojoudMadal';
  localValuej: string = '';
  madalStringj: string;
  madalNumberj: number;

  getToojoudMadal() {
    this.madalStringj = localStorage.getItem(this.keyj);
    this.madalNumberj=Number(this.madalStringj);
    return this.madalNumberj;
  }

  key2j: string = 'toojoudKeskmine';
  keskmineStringj: string;
  keskmineNumberj: number;

  getToojoudKeskmine() {
    this.keskmineStringj = localStorage.getItem(this.key2j);
    this.keskmineNumberj=Number(this.keskmineStringj);
    return this.keskmineNumberj;
  }

  key3j: string = 'toojoudKorge';
  korgeStringj: string;
  korgeNumberj: number;

  getToojoudKorge() {
    this.korgeStringj = localStorage.getItem(this.key3j);
    this.korgeNumberj=Number(this.korgeStringj);
    return this.korgeNumberj;
  }

  toojoudTekst() {
    //this.getToojoudMadal();
    //this.getToojoudKeskmine();
    //this.getToojoudKorge();

    if (this.toomadalNumber>this.tookeskmineNumber && this.toomadalNumber>this.tookorgeNumber) {
      this.muutujaToojoud = 'Ettevõtte tööjõu tootlikkuse kasv näib olevat languses, mis tähendab seda, et palgad kasvavad võrreldes käibega liiga kiiresti. Palgataseme määrab üldjuhul turg, seega on oluline ärimudel kriitilise pilguga üle vaadata ja otsustada, kas praegustes tööturutingimustes saab samal viisil jätkata.';       
    //  this.muutuja2 = 'väike';
    //  this.muutuja3 = 'väike';
    }

    else if (this.tookeskmineNumber>this.toomadalNumber && this.tookeskmineNumber>this.tookorgeNumber) {
      this.muutujaToojoud='Ettevõtte tööjõu tootlikkuse kasv näib püsivat stabiilsel tasemel, mis ühelt poolt tähendab teatud palgasurvet, kuid teiselt poolt seda, et palgatõusuks on ruumi. Ettevõttel on võimalik häid töötajaid tööl hoida.';
    //  this.muutuja2 = 'keskpärane';
    //  this.muutuja3 = 'keskpärane';
    }

    else if (this.tookorgeNumber>this.toomadalNumber && this.tookorgeNumber>this.tookeskmineNumber) {
      this.muutujaToojoud='Ettevõtte tööjõu tootlikkuse kasv näib olevat kasvutrendis. See tähendab, et kui palku tõsta, jääb tööjõu tootlikkus konkurentsivõimeliseks. Selles olukorras on võimalik vajadusel lisatööjõudu kaasata.';
    //  this.muutuja2 = 'suur';
    //  this.muutuja3 = 'suur';
    }

    else if (this.tookeskmineNumber===this.toomadalNumber && this.tookeskmineNumber===this.tookorgeNumber) {
      this.muutujaToojoud='Ettevõtte tööjõu tootlikkuse kasv näib püsivat stabiilsel tasemel, mis ühelt poolt tähendab teatud palgasurvet, kuid teiselt poolt seda, et palgatõusuks on ruumi. Ettevõttel on võimalik häid töötajaid tööl hoida.';
    //  this.muutuja2 = 'keskpärane';
    //  this.muutuja3 = 'keskpärane';
    }
    

    
  this.koondSoovitusj = this.muutujaBlanco+this.muutujaToojoud;
  //+this.muutuja2+this.tekst3+this.muutuja3+this.tekst4;
  
  return this.koondSoovitusj;
}









}
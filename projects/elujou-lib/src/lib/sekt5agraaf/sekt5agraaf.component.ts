import { Component, VERSION, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { xtee } from '../xtee/xtee';
import { sektorsuht } from '../graafSisend/sektor';
import { sektorsuhttjt } from '../graafSisend/sektortjt';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'sekt5agraaf',
  templateUrl: './sekt5agraaf.component.html',
  styleUrls: [ './sekt5agraaf.component.scss' ],
  standalone: true,
  imports: [NgxEchartsDirective, ReactiveFormsModule, FormsModule, CommonModule],
  providers: [
    provideEcharts(), 
  ]
})
export class Sekt5agraafComponent implements OnInit  {
  
  //Sisse

  suhtarvArray: any = [];
  suhtarvArray2: any = [];
  oigeSuhtarv: any;
  sectorNo: any;
  sectorNox: any;

  newdata: any;
  minuTJT: any;
  //minuPKM: any;
  //minuROA: any;
  //minuROE: any;


  constructor () {
      setInterval (() => {
    this.newdata =  [   //Iga valdkonna jaoks on eraldi datamatrix
      [this.kysiTJT(), 0, 4],  //Esimesel kohal number tähendab näitaja suurust (antud juhul 1.4)
      [this.minuTJT, 0, 4.01]//,
     // [this.kysiPKM(), 1, 4], //Teisel kohal näitaja 0-kõige alumist (Varude käibesagedus), 1-keskmist (Lühiajalise võlgnevuse kattekordaja), 2-kõige kõrgemat (Vara käibesagedus)
     // [this.minuPKM, 1, 6], //Kolmandal kohal asuv number 6 - ettevõtte info, 4 - sektori info
     // [this.kysiROA(), 2, 4],
     // [this.minuROA, 2, 6],
     // [this.kysiROE(), 3, 4],
     // [this.minuROE, 3, 6]
    ];
  }, 3000);
  
  this.sectorNox = xtee.sektorNo;//JSON.stringify(xtee.sektorNo);
  //this.kysiLahtevaldkond();
  this.minuTJT = Math.round((xtee.TJT)*100)/100;
  //this.minuPKM = Math.round((xtee.PKM)*100)/100;
  //this.minuROA = Math.round((xtee.ROA)*100)/100;
  //this.minuROE = Math.round((xtee.ROE)*100)/100;
  }
  //this.varudeKaibesagedus = Math.round((this.varudeKaibesagedus)*100)/100;
  //sektor = this.sectorNo;

  //varude käibesagedus VKK

  //AKM: 0
  //description: 'Ettevõtte käibe ärirentaablus.'

  //PKM: 1
  //description: 'Ettevõtte käibe puhasrentaablus.'

  //ROA: 2
  //description: 'Ettevõtte varade puhasrentaablus.'

  //ROE: 3
  //description: 'Ettevõtte omakapitali puhasrentaablus.'



  varudeKaibesagedus: any = 0.1;
  toojouTootl: any = 0.1;
  kaibePuhasrent: any = 0.1;
  varaPuhasrent: any = 0.1;
  omakPuhasrent: any = 0.1;

  suhtarvuvalik() {

    for (let key in sektorsuhttjt) {
      if (sektorsuhttjt.hasOwnProperty(key)) {
        this.suhtarvArray.push(sektorsuhttjt[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.sektor_nr === this.sectorNo;////sektor;
  })
  /////console.log("uhtarvarray", this.suhtarvArray);
  /////console.log("uhtarv", this.oigeSuhtarv);
  /////console.log("yksarv", this.oigeSuhtarv[0]);
  ////console.log("yksarvAKM0714", this.oigeSuhtarv[0].AKM);
  this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
  //return this.oigeSuhtarv;
  }

  kysiTJT() {   //Ettevõtte tööjõu tootlikkus.'0
    for (let key in sektorsuhttjt) {
      if (sektorsuhttjt.hasOwnProperty(key)) {
        this.suhtarvArray2.push(sektorsuhttjt[key]);
      }
    }
    //console.log("trykimeterviku", this.suhtarvArray2);
    this.oigeSuhtarv= this.suhtarvArray2.filter(e=>{
      return e.sektor_nr === this.sectorNo;////sektor;
  })
    this.toojouTootl = this.oigeSuhtarv[0].kmd_tsd;
    //console.log("otsimetoojoudu", this.oigeSuhtarv[0]);
    //this.lyhVolgnKaibek = this.oigeSuhtarv[0].LVKAK;
    this.toojouTootl = Math.round((this.toojouTootl)*100)/100;
  return this.toojouTootl;
  }

  kysiPKM() {  //Ettevõtte käibe puhasrentaablus. 1
    for (let key in sektorsuhttjt) {
      if (sektorsuhttjt.hasOwnProperty(key)) {
        this.suhtarvArray.push(sektorsuhttjt[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.sektor_nr === this.sectorNo;////sektor;
  })
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
    this.kaibePuhasrent = this.oigeSuhtarv[0].PKM;
    this.kaibePuhasrent = Math.round((this.kaibePuhasrent)*100)/100;
  
  return this.kaibePuhasrent;
  }

  kysiROA() {  //Ettevõtte varade puhasrentaablus. 2
    for (let key in sektorsuhttjt) {
      if (sektorsuhttjt.hasOwnProperty(key)) {
        this.suhtarvArray.push(sektorsuhttjt[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.sektor_nr === this.sectorNo;////sektor;
  })
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
    this.varaPuhasrent = this.oigeSuhtarv[0].ROA;
    this.varaPuhasrent = Math.round((this.varaPuhasrent)*100)/100;
  
  return this.varaPuhasrent;
  }

  kysiROE() {  //Ettevõtte omakapitali puhasrentaablus. 3
    for (let key in sektorsuhttjt) {
      if (sektorsuhttjt.hasOwnProperty(key)) {
        this.suhtarvArray.push(sektorsuhttjt[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.sektor_nr === this.sectorNo;////sektor;
  })
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
    this.omakPuhasrent = this.oigeSuhtarv[0].ROE;
    this.omakPuhasrent = Math.round((this.omakPuhasrent)*100)/100;
  
  return this.omakPuhasrent;
  }

  options: any;
  valik = "xxx";

  valdkonnaandmed: any;
  ///valdkonnake: any;

//  name = new FormsModule();
  name = new FormControl();
//  dropdown = new FormsModule();
  dropdown = new FormControl();
  optionxx = ['Loomakasvatus'];
  options2 = ['Taimekasvatus', 'Loomakasvatus', 'Põllumajanduslikud abitegevused', 'Metsakasvatus', 'Metsamajanduse abitegevused', 'Kalapüük', 'Muu kaevandamine', 'Toiduainete tootmine', 'Joogi tootmine', 'Tekstiilitootmine', 'Rõivatootmine', 'Puidu saagimine ja hööveldamine', 'Paberimassi, paberi ja papi tootmine', 'Trükindus ja salvestiste paljundus', 'Keemiatootmine', 'Plasttoodete tootmine', 'Muude mittemetalsetest mineraalidest toodete tootmine', 'Metalltoodete tootmine, v.a masinad ja seadmed', 'Arvutite, elektroonika- ja optikaseadmete tootmine', 'Elektriseadmete tootmine', 'Üldmasinate tootmine', 'Mootorsõidukite tootmine', 'Muude transpordivahendite tootmine', 'Mööbli tootmine', 'Jalatsitootmine', 'Muu tootmine', 'Masinate, seadmete remont ja paigaldus', 'Tööstuslike masinate ja seadmete paigaldus', 'Elektrienergia, gaasi, auru ja konditsioneeritud õhuga varustamine', 'Veekogumine ja kanalisatsioon', 'Jäätmekogumine, töötlus, taaskasutamine', 'Üldehitus', 'Teede ja trasside ehitus', 'Eriosade ehitus', 'Mootorsõidukite hulgi ja jaemüük', 'Üldine vahendamine', 'Põllumajandustoorme ja elusloomade hulgimüük', 'Kodutarvete hulgimüük', 'Muude asjade, masinate ja seadmete hulgimüük', 'Muu spetsialiseeritud hulgimüük', 'Spetsialiseerimata hulgikaubandus', 'Spetsialiseerimata jaemüük', 'Toidu jaemüük', 'Mootorikütuse jaemüük', 'Arvutite ja seadmete jaemüük', 'Muude kodutarvete jaemüük', 'Kultuuri ja vabaaja kaupade jaemüük', 'Jaemüük kioskites ja turgudel', 'Jaemüük posti või interneti teel', 'Muu sõitjate maismaavedu', 'Kaubavedu maanteel ja kolimisteenused', 'Sõitjate veevedu (veetransport)', 'Kauba õhutransport', 'Laondus', 'Veondust abistavad tegevused', 'Posti ja kullerteenus', 'Majutus', 'Toidu ja joogi serveerimine', 'Kirjastamine', 'Kinofilmid, muusika ja Videod', 'Elektrooniline side', 'Programmeerimine', 'Infoalane tegevus', 'Finantsvahendus', 'Kinnisvara', 'Juriidilised toimingud', 'Arvepidamine', 'Peakontorid', 'Juhtimisalane nõustamine', 'Arhitektid, insenerid', 'Teimimine, analüüs', 'Teadus- ja arendustegevus', 'Reklaam, turu-uuringud', 'Disainerite tegevus', 'Fotograafia', 'Muu kutsetegevus', 'Veterinaaria', 'Mootorsõidukite rentimine', 'Tarbeesemete üürimine ja kasutusrent', 'Muude masinate, materiaalse vara üürimine, kasutusrent', 'Intellektuaalomandi rentimine', 'Tööhõive', 'Reisibürood ja reisikorraldus', 'Turvatöö, juurdlus', 'Hoonete, maastike hooldus', 'Büroohaldus', 'Haridus', 'Tervishoid', 'Hoolekandeasutuste tegevus', 'Loome, kunst, meelelahutus', 'Muude kultuuriasutuste tegevus', 'Sporditegevus, lõbustus, vaba aeg', 'Arvutite, tarbeesemete parandus', 'Muu teenindus'];
  testSubscription: Subscription;
  
  
  
  ////valdkonnake = "Loomakasvatus";
  valdkonnake2: string;
  kysiLahtevaldkond() {

    for (let key in sektorsuht) {
      if (sektorsuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(sektorsuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.sektor_nr === this.sectorNox;////sektor;
  })

  ////console.log("yksarv", this.oigeSuhtarv[0]);
  ////console.log("sektroinumber", this.sectorNox);
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
  this.valdkonnake2 = this.oigeSuhtarv[0].sektor_txt;
    //this.varKaibesag = Math.round((this.varKaibesag)*100)/100;
  ////console.log("lahtevaldkond", this.valdkonnake2);
  ////this.valdkonnaandmed = this.newdata2;
  return this.valdkonnake2;

  }



  //testSubscription: any;
  muudaVaartust() {
    this.testSubscription = this.dropdown.valueChanges
    // .pipe(debounceTime(100))
    //.subscribe(value => console.log(value));
    .subscribe (value => this.valdkonnake2 = value);
    ///.subscribe (value => localStorage.setItem("valdkond", value));
    //.subscribe (value => localStorage.setItem("maakond", JSON.stringify(value)));
    } 

    paneAndmed() {
      if (this.valdkonnake2 == 'Taimekasvatus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 1;
      }

      if (this.valdkonnake2 == 'Loomakasvatus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 2;
      }

      if (this.valdkonnake2 == 'Põllumajanduslikud abitegevused') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 3;
      }

      if (this.valdkonnake2 == 'Metsakasvatus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 4;
      }

      if (this.valdkonnake2 == 'Metsamajanduse abitegevused') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 5;
      }

      if (this.valdkonnake2 == 'Kalapüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 6;
      }
 
      if (this.valdkonnake2 == 'Muu kaevandamine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 7;
      }
    
      if (this.valdkonnake2 == 'Toiduainete tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 8;
      }
      
      if (this.valdkonnake2 == 'Joogi tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 9;
      }

      if (this.valdkonnake2 == 'Tekstiilitootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 10;
      }

      if (this.valdkonnake2 == 'Rõivatootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 11;
      }

      if (this.valdkonnake2 == 'Puidu saagimine ja hööveldamine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 12;
      }

      if (this.valdkonnake2 == 'Paberimassi, paberi ja papi tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 13;
      }
      
      if (this.valdkonnake2 == 'Trükindus ja salvestiste paljundus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 14;
      }

      if (this.valdkonnake2 == 'Keemiatootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 15;
      }

      if (this.valdkonnake2 == 'Plasttoodete tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 16;
      }

      if (this.valdkonnake2 == 'Muude mittemetalsetest mineraalidest toodete tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 17;
      }

      if (this.valdkonnake2 == 'Metalltoodete tootmine, v.a masinad ja seadmed') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 18;
      }

      if (this.valdkonnake2 == 'Arvutite, elektroonika- ja optikaseadmete tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 19;
      }

      if (this.valdkonnake2 == 'Elektriseadmete tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 20;
      }

      if (this.valdkonnake2 == 'Üldmasinate tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 21;
      }
      
      if (this.valdkonnake2 == 'Mootorsõidukite tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 22;
      }

      if (this.valdkonnake2 == 'Muude transpordivahendite tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 23;
      }

      if (this.valdkonnake2 == 'Mööbli tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 24;
      }

      if (this.valdkonnake2 == 'Jalatsitootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 25;
      }

      if (this.valdkonnake2 == 'Muu tootmine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 26;
      }

      if (this.valdkonnake2 == 'Masinate, seadmete remont ja paigaldus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 27;
      }
     
      if (this.valdkonnake2 == 'Tööstuslike masinate ja seadmete paigaldus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 28;
      }

      if (this.valdkonnake2 == 'Elektrienergia, gaasi, auru ja konditsioneeritud õhuga varustamine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 29;
      }

      if (this.valdkonnake2 == 'Veekogumine ja kanalisatsioon') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 30;
      }
  
      if (this.valdkonnake2 == 'Jäätmekogumine, töötlus, taaskasutamine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 31;
      }

      if (this.valdkonnake2 == 'Üldehitus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 32;
      }

      if (this.valdkonnake2 == 'Teede ja trasside ehitus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 33;
      }
      
      if (this.valdkonnake2 == 'Eriosade ehitus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 34;
      }

      if (this.valdkonnake2 == 'Mootorsõidukite hulgi ja jaemüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 35;
      }

      if (this.valdkonnake2 == 'Üldine vahendamine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 36;
      }

      if (this.valdkonnake2 == 'Põllumajandustoorme ja elusloomade hulgimüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 37;
      }

      if (this.valdkonnake2 == 'Kodutarvete hulgimüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 38;
      }

      if (this.valdkonnake2 == 'Muude asjade, masinate ja seadmete hulgimüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 39;
      }

      if (this.valdkonnake2 == 'Muu spetsialiseeritud hulgimüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 40;
      }
      
      if (this.valdkonnake2 == 'Spetsialiseerimata hulgikaubandus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 41;
      }

      if (this.valdkonnake2 == 'Spetsialiseerimata jaemüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 42;
      }
  
      if (this.valdkonnake2 == 'Toidu jaemüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 43;
      }

      if (this.valdkonnake2 == 'Mootorikütuse jaemüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 44;
      }
     
      if (this.valdkonnake2 == 'Arvutite ja seadmete jaemüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 45;
      }

      if (this.valdkonnake2 == 'Muude kodutarvete jaemüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 46;
      }

      if (this.valdkonnake2 == 'Kultuuri ja vabaaja kaupade jaemüük') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 47;
      }

      if (this.valdkonnake2 == 'Jaemüük kioskites ja turgudel') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 48;
      }

      if (this.valdkonnake2 == 'Jaemüük posti või interneti teel') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 49;
      }

      if (this.valdkonnake2 == 'Muu sõitjate maismaavedu') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 50;
      }

      if (this.valdkonnake2 == 'Kaubavedu maanteel ja kolimisteenused') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 51;
      }

      if (this.valdkonnake2 == 'Sõitjate veevedu (veetransport)') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 52;
      }

      if (this.valdkonnake2 == 'Kauba õhutransport') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 53;
      }
      
      if (this.valdkonnake2 == 'Laondus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 54;
      }

      if (this.valdkonnake2 == 'Veondust abistavad tegevused') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 55;
      }

      if (this.valdkonnake2 == 'Posti ja kullerteenus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 56;
      }

      if (this.valdkonnake2 == 'Majutus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 57;
      }
     
      if (this.valdkonnake2 == 'Toidu ja joogi serveerimine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 58;
      }

      if (this.valdkonnake2 == 'Kirjastamine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 59;
      }

      if (this.valdkonnake2 == 'Kinofilmid, muusika ja Videod') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 60;
      }

      if (this.valdkonnake2 == 'Elektrooniline side') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 61;
      }

      if (this.valdkonnake2 == 'Programmeerimine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 62;
      }
    
      if (this.valdkonnake2 == 'Infoalane tegevus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 63;
      }

      if (this.valdkonnake2 == 'Finantsvahendus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 64;
      }

      if (this.valdkonnake2 == 'Kinnisvara') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 65;
      }
     
      if (this.valdkonnake2 == 'Juriidilised toimingud') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 66;
      }

      if (this.valdkonnake2 == 'Arvepidamine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 67;
      }

      if (this.valdkonnake2 == 'Peakontorid') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 68;
      }

      if (this.valdkonnake2 == 'Juhtimisalane nõustamine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 69;
      }

      if (this.valdkonnake2 == 'Arhitektid, insenerid') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 70;
      }
     
      if (this.valdkonnake2 == 'Teimimine, analüüs') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 71;
      }
      
      if (this.valdkonnake2 == 'Teadus- ja arendustegevus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 72;
      }
     
      if (this.valdkonnake2 == 'Reklaam, turu-uuringud') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 73;
      }

      if (this.valdkonnake2 == 'Disainerite tegevus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 74;
      }

      if (this.valdkonnake2 == 'Fotograafia') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 75;
      }

      if (this.valdkonnake2 == 'Muu kutsetegevus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 76;
      }
      
      if (this.valdkonnake2 == 'Veterinaaria') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 77;
      }

      if (this.valdkonnake2 == 'Mootorsõidukite rentimine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 78;
      }

      if (this.valdkonnake2 == 'Tarbeesemete üürimine ja kasutusrent') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 79;
      }

      if (this.valdkonnake2 == 'Muude masinate, materiaalse vara üürimine, kasutusrent') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 80;
      }

      if (this.valdkonnake2 == 'Intellektuaalomandi rentimine') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 81;
      }

      if (this.valdkonnake2 == 'Tööhõive') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 82;
      }
     
      if (this.valdkonnake2 == 'Reisibürood ja reisikorraldus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 83;
      }

      if (this.valdkonnake2 == 'Turvatöö, juurdlus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 84;
      }

      if (this.valdkonnake2 == 'Hoonete, maastike hooldus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 85;
      }

      if (this.valdkonnake2 == 'Büroohaldus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 86;
      }

      if (this.valdkonnake2 == 'Haridus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 88;
      }

      if (this.valdkonnake2 == 'Tervishoid') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 89;
      }

      if (this.valdkonnake2 == 'Hoolekandeasutuste tegevus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 90;
      }
     
      if (this.valdkonnake2 == 'Loome, kunst, meelelahutus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 91;
      }

      if (this.valdkonnake2 == 'Muude kultuuriasutuste tegevus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 92;
      }
    
      if (this.valdkonnake2 == 'Sporditegevus, lõbustus, vaba aeg') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 93;
      }

      if (this.valdkonnake2 == 'Arvutite, tarbeesemete parandus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 95;
      }

      if (this.valdkonnake2 == 'Muu teenindus') {
        this.valdkonnaandmed = this.newdata;
        this.sectorNo = 96;
      }


   

      //return this.valdkonnaandmed;


    }

    minVarKaibs = 3.4;
////newdata: any;

////constructor () {
////    setInterval (() => {
////  this.newdata =  [   //Iga valdkonna jaoks on eraldi datamatrix
////    [this.kysiVKK(), 0, 4],  //Esimesel kohal number tähendab näitaja suurust (antud juhul 1.4)
////    [this.minVarKaibs, 0, 6],
////    [this.kysiLVKAK(), 1, 4], //Teisel kohal näitaja 0-kõige alumist (Varude käibesagedus), 1-keskmist (Lühiajalise võlgnevuse kattekordaja), 2-kõige kõrgemat (Vara käibesagedus)
////    [2.2, 1, 6], //Kolmandal kohal asuv number 6 - ettevõtte info, 4 - sektori info
////    [this.kysiVAKK(), 2, 4],
////    [1.9, 2, 6]
////  ];
////}, 3000);

////this.sectorNo = JSON.stringify(xtee.sektorNo);

////}

  newdata2 =  [
    [2.07, 1, 4],
    [3.4, 0, 6],
    [4.05, 2, 4],
    [2.2, 1, 6],
    [6.4, 0, 4],
    [1.9, 2, 6]
  ];

  newdata3 =  [
    [3.07, 1, 4],
    [3.4, 0, 6],
    [4.75, 2, 4],
    [2.2, 1, 6],
    [6.8, 0, 4],
    [1.9, 2, 6]
  ]; 

  newdata4 =  [
    [2.23, 1, 4],
    [3.4, 0, 6],
    [1.5, 2, 4],
    [2.2, 1, 6],
    [4.8, 0, 4],
    [1.9, 2, 6]
  ];



  naitajad = ['    Tööjõu tootlikkus'];



 // dataList: Array<any> = [];
 // schedule: { branch: '' };
  
//  constructor() {
//    this.dataList = [
//      { code: 1, name: "shohel" },
//      { code: 2, name: "rana" },
//      { code: 3, name: "shipon" }
//    ]
 // }





  ngOnInit(): void {
    this.kysiLahtevaldkond();
    setInterval (() => {
   
      ////joonista() {
        this.options = {
          grid: {
            left: 2,
            bottom: 10,
            right: 10,
            containLabel: true
          },
         // legend: {
         //   data: ['andmekesed']
         // },
          //title: {
          //  text: 'Beijing AQI',
         //   left: '1%'
          //},
    
    
          //color: [
            //'#c23531',
            //'#2f4554',
            //'#c4ccd3'
          //],
    
    
    
    
          tooltip: {
    
            //formatter: params => {
            //    return '<div style="width:300px; height: 400px">working j</div>';
            //  },
            //formatter: 'Sinu {a} onb {b} onc {c} ettevõtetest',
            // confine: true
            trigger: 'item',
            confine: true,
          
            formatter: function(params) {
              if (params.value[2] == 4.01) {var xx = "Minu näitaja: "}
              if (params.value[2] == 4) {var xx = "Sektori keskmine näitaja: "}
    
              if (params.value[1] == 0) {var zz = " Tööjõu tootlikkus"}
              if (params.value[1] == 1) {var zz = " Käibe puhasrentaablus"}
              if (params.value[1] == 2) {var zz = " Varade puhasrentaablus"}
              if (params.value[1] == 3) {var zz = " Omakapitali puhasrentaablus"}
    
                      return xx+params.value[0]+"<br>" +zz}      
          
          },
          xAxis: {},
          yAxis: {
            //name: 'line',
            type: 'category',
              data: this.naitajad,
              axisLine: {
                show: false
              }
          },
        series: [
        { name: 'andmekesed',
          //symbolSize: 20,
          data: this.valdkonnaandmed,
    
    
          //color: [
          //  '#c23531',
          //  '#2f4554',
          //  '#c4ccd3'
          //],
    
    
          type: 'scatter',
          symbolSize: function (val) {
            return val[2] * 6;
          },
          //symbolColor: function (val) {
          //  if (val[2] == 6)
          //  return 'red';
          //},
          itemStyle: {
    
            color: (params) => {
              if (params.value[2] == 4.01) {
                return '#2f4554';
              }
              if (params.value[2] == 4) {
                const randomColor = Math.floor(Math.random() * 16777215).toString(
                  16
                );
                return '#2ea0f5';//'#' + randomColor; //#7289ab  //return '#2ea0f5';
              } else {
                return '#c4ccd3';
              }
            }
           
          }
        }
      ]
    
       };
    
    
      }, 3000);
    

} //ngOnInit lõpetab


}
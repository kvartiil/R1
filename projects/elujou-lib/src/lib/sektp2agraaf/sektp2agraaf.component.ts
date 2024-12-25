import { Component, VERSION, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { xtee } from '../xtee/xtee';
import { sektorsuht } from '../graafSisend/sektor';
import { omavalitsussuht } from '../graafSisend/omavalitsus';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'sektp2agraaf',
  templateUrl: './sektp2agraaf.component.html',
  styleUrls: [ './sektp2agraaf.component.scss' ],
  standalone: true,
  imports: [NgxEchartsDirective, ReactiveFormsModule, FormsModule, CommonModule],
  providers: [
    provideEcharts(), 
  ]
})
export class Sektp2agraafComponent implements OnInit  {
  
  //Sisse

  suhtarvArray: any = [];
  oigeSuhtarv: any;
  sectorNo: any;
  sectorNox: any;
  omavNo: any;

  newdata: any;
  //minuVKK: any;
  //minuLVKaK: any;
  //minuVaKK: any;
  minuLVKK: any;
  minuMVK: any;
  minuRK: any;

  constructor () {
      setInterval (() => {
    this.newdata =  [   //Iga valdkonna jaoks on eraldi datamatrix
      [this.kysiLVKK(), 0, 4],  //Esimesel kohal number tähendab näitaja suurust (antud juhul 1.4)
      [this.minuLVKK, 0, 4.01],
      [this.kysiMVK(), 1, 4], //Teisel kohal näitaja 0-kõige alumist (Varude käibesagedus), 1-keskmist (Lühiajalise võlgnevuse kattekordaja), 2-kõige kõrgemat (Vara käibesagedus)
      [this.minuMVK, 1, 4.01], //Kolmandal kohal asuv number 6 - ettevõtte info, 4 - sektori info
      [this.kysiRK(), 2, 4],
      [this.minuRK, 2, 4.01]
    ];
  }, 3000);
  
  this.sectorNox = xtee.sektorNo;//JSON.stringify(xtee.sektorNo);
  this.omavNo = xtee.kov;//kov: 784, //e
  //this.kysiLahtevaldkond();
  //this.minuVKK = Math.round((xtee.VKK)*100)/100;
  //this.minuLVKaK = Math.round((xtee.LVKaK)*100)/100;
  //this.minuVaKK = Math.round((xtee.VaKK)*100)/100;
  this.minuLVKK = Math.round((xtee.LVKK)*100)/100;
  this.minuMVK = Math.round((xtee.MVK)*100)/100;
  this.minuRK = Math.round((xtee.RK)*100)/100;
  }
  //this.varudeKaibesagedus = Math.round((this.varudeKaibesagedus)*100)/100;
  //sektor = this.sectorNo;

  //varude käibesagedus VKK
  varudeKaibesagedus: any = 0.1;
  //lyhVolgnKaibek:any = 0.1;
  //varKaibesag:any = 0.1;

  lyhikohKattekord: any = 0.1;
  maksevKord:any = 0.1;
  rahaKord:any = 0.1;

  suhtarvuvalik() {

    for (let key in sektorsuht) {
      if (sektorsuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(sektorsuht[key]);
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

  kysiLVKK() {  //Ettevõtte lühiajaliste kohustuste kattekordaja. 0
  //kysiVKK() {   //Ettevõtte varude käibesagedus. 0
    for (let key in omavalitsussuht) {
      if (omavalitsussuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(omavalitsussuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.kov === this.omavNo;////sektor;
  })
    this.lyhikohKattekord = this.oigeSuhtarv[0].LVKK;
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
    ////console.log("yksarv", this.oigeSuhtarv[0]);
    //this.lyhVolgnKaibek = this.oigeSuhtarv[0].LVKAK;
    this.lyhikohKattekord = Math.round((this.lyhikohKattekord)*100)/100;
  return this.lyhikohKattekord;
  }

  kysiMVK() {  //Ettevõtte maksevõime kordaja. 1
  //kysiLVKAK() {  //Ettevõtte lühiajalise võlgnevuse käibekordaja. 1
    for (let key in omavalitsussuht) {
      if (omavalitsussuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(omavalitsussuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.kov === this.omavNo;////sektor;
  })
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
    this.maksevKord = this.oigeSuhtarv[0].MVK;
    //this.lyhVolgnKaibek = this.oigeSuhtarv[0].LVKAK;
    this.maksevKord = Math.round((this.maksevKord)*100)/100;
  
  return this.maksevKord;
  }

  kysiRK() {  //Ettevõtte rahakordaja. 2
  //kysiVAKK() {  //Ettevõtte varade käibesagedus. 2
    for (let key in omavalitsussuht) {
      if (omavalitsussuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(omavalitsussuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.kov === this.omavNo;////sektor;
  })
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
    this.rahaKord = this.oigeSuhtarv[0].RK;
    //this.varKaibesag = this.oigeSuhtarv[0].VAKK;
    this.rahaKord = Math.round((this.rahaKord)*100)/100;
  
  return this.rahaKord;
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
  options2 = ['Alutaguse vald', 'Anija vald', 'Antsla vald', 'Elva vald', 'Häädemeeste vald', 'Haapsalu linn', 'Haljala vald', 'Harku vald', 'Hiiumaa vald', 'Järva vald', 'Jõelähtme vald', 'Jõgeva vald', 'Jõhvi vald', 'Kadrina vald', 'Kambja vald', 'Kanepi vald', 'Kastre vald', 'Kehtna vald', 'Kihnu vald', 'Kiili vald', 'Kohila vald', 'Kohtla-Järve linn', 'Kose vald', 'Kuusalu vald', 'Lääne-Harju vald', 'Lääne-Nigula vald', 'Lääneranna vald', 'Lüganuse vald', 'Luunja vald', 'Märjamaa vald', 'Muhu vald', 'Mulgi vald', 'Mustvee vald', 'Narva-Jõesuu linn', 'Nõo vald', 'Otepää vald', 'Paide linn', 'Pärnu linn', 'Peipsiääre vald', 'Põhja-Pärnumaa vald', 'Põhja-Sakala vald', 'Põltsamaa vald', 'Põlva vald', 'Raasiku vald', 'Rae vald', 'Rakvere vald', 'Räpina vald', 'Rapla vald', 'Rõuge vald', 'Ruhnu vald', 'Saarde vald', 'Saaremaa vald', 'Saku vald', 'Saue vald', 'Setomaa vald', 'Tallinn', 'Tapa vald', 'Tartu linn', 'Tartu vald', 'Toila vald', 'Tori vald', 'Tõrva vald', 'Türi vald', 'Väike-Maarja vald', 'Valga vald', 'Viimsi vald', 'Viljandi vald', 'Vinni vald', 'Viru-Nigula vald', 'Vormsi vald', 'Võru vald'];
  testSubscription: Subscription;
  
  
  
  ////valdkonnake = "Loomakasvatus";
  valdkonnake2: string;
  kysiLahtevaldkond() {

    for (let key in omavalitsussuht) {
      if (omavalitsussuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(omavalitsussuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.kov === this.omavNo;////sektor;
  })
  ///console.log("omavalitsusnumber", this.omavNo);
  ///console.log("array", this.suhtarvArray);
  ///console.log("oigekirje", this.oigeSuhtarv);
  ////console.log("yksarv", this.oigeSuhtarv[0]);
  ////console.log("sektroinumber", this.sectorNox);
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
  this.valdkonnake2 = this.oigeSuhtarv[0].vald;
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
      if (this.valdkonnake2 == 'Alutaguse vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 130;
      }

      if (this.valdkonnake2 == 'Anija vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 141;
      }

      if (this.valdkonnake2 == 'Antsla vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 145;
      }

      if (this.valdkonnake2 == 'Elva vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 171;
      }

      if (this.valdkonnake2 == 'Häädemeeste vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 214;
      }

      if (this.valdkonnake2 == 'Haapsalu linn') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 184;
      }
 
      if (this.valdkonnake2 == 'Haljala vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 191;
      }
    
      if (this.valdkonnake2 == 'Harku vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 198;
      }
      
      if (this.valdkonnake2 == 'Hiiumaa vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 205;
      }

      if (this.valdkonnake2 == 'Järva vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 255;
      }

      if (this.valdkonnake2 == 'Jõelähtme vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 245;
      }

      if (this.valdkonnake2 == 'Jõgeva vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 247;
      }

      if (this.valdkonnake2 == 'Jõhvi vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 251;
      }
      
      if (this.valdkonnake2 == 'Kadrina vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 272;
      }

      if (this.valdkonnake2 == 'Kambja vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 283;
      }

      if (this.valdkonnake2 == 'Kanepi vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 284;
      }

      if (this.valdkonnake2 == 'Kastre vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 291;
      }

      if (this.valdkonnake2 == 'Kehtna vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 293;
      }

      if (this.valdkonnake2 == 'Kihnu vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 303;
      }

      if (this.valdkonnake2 == 'Kiili vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 305;
      }

      if (this.valdkonnake2 == 'Kohila vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 317;
      }
      
      if (this.valdkonnake2 == 'Kohtla-Järve linn') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 321;
      }

      if (this.valdkonnake2 == 'Kose vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 338;
      }

      if (this.valdkonnake2 == 'Kuusalu vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 353;
      }

      if (this.valdkonnake2 == 'Lääne-Harju vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 431;
      }

      if (this.valdkonnake2 == 'Lääne-Nigula vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 441;
      }

      if (this.valdkonnake2 == 'Lääneranna vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 430;
      }
     
      if (this.valdkonnake2 == 'Lüganuse vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 442;
      }

      if (this.valdkonnake2 == 'Luunja vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 432;
      }

      if (this.valdkonnake2 == 'Märjamaa vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 502;
      }
  
      if (this.valdkonnake2 == 'Muhu vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 478;
      }

      if (this.valdkonnake2 == 'Mulgi vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 480;
      }

      if (this.valdkonnake2 == 'Mustvee vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 486;
      }
      
      if (this.valdkonnake2 == 'Narva-Jõesuu linn') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 515;
      }

      if (this.valdkonnake2 == 'Nõo vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 528;
      }

      if (this.valdkonnake2 == 'Otepää vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 557;
      }

      if (this.valdkonnake2 == 'Paide linn') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 567;
      }

      if (this.valdkonnake2 == 'Pärnu linn') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 624;
      }

      if (this.valdkonnake2 == 'Peipsiääre vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 586;
      }

      if (this.valdkonnake2 == 'Põhja-Pärnumaa vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 638;
      }
      
      if (this.valdkonnake2 == 'Põhja-Sakala vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 615;
      }

      if (this.valdkonnake2 == 'Põltsamaa vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 618;
      }
  
      if (this.valdkonnake2 == 'Põlva vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 622;
      }

      if (this.valdkonnake2 == 'Raasiku vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 651;
      }
     
      if (this.valdkonnake2 == 'Rae vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 653;
      }

      if (this.valdkonnake2 == 'Rakvere vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 661;
      }

      if (this.valdkonnake2 == 'Räpina vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 708;
      }

      if (this.valdkonnake2 == 'Rapla vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 668;
      }

      if (this.valdkonnake2 == 'Rõuge vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 698;
      }

      if (this.valdkonnake2 == 'Ruhnu vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 689;
      }

      if (this.valdkonnake2 == 'Saarde vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 712;
      }

      if (this.valdkonnake2 == 'Saaremaa vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 714;
      }

      if (this.valdkonnake2 == 'Saku vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 719;
      }
      
      if (this.valdkonnake2 == 'Saue vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 725;
      }

      if (this.valdkonnake2 == 'Setomaa vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 732;
      }

      if (this.valdkonnake2 == 'Tallinn') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 784;
      }

      if (this.valdkonnake2 == 'Tapa vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 792;
      }
     
      if (this.valdkonnake2 == 'Tartu linn') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 793;
      }

      if (this.valdkonnake2 == 'Tartu vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 796;
      }

      if (this.valdkonnake2 == 'Toila vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 803;
      }

      if (this.valdkonnake2 == 'Tori vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 809;
      }

      if (this.valdkonnake2 == 'Tõrva vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 824;
      }
    
      if (this.valdkonnake2 == 'Türi vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 834;
      }

      if (this.valdkonnake2 == 'Väike-Maarja vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 928;
      }

      if (this.valdkonnake2 == 'Valga vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 857;
      }
     
      if (this.valdkonnake2 == 'Viimsi vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 890;
      }

      if (this.valdkonnake2 == 'Viljandi vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 899;
      }

      if (this.valdkonnake2 == 'Vinni vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 901;
      }

      if (this.valdkonnake2 == 'Viru-Nigula vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 903;
      }

      if (this.valdkonnake2 == 'Vormsi vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 907;
      }
     
      if (this.valdkonnake2 == 'Võru vald') {
        this.valdkonnaandmed = this.newdata;
        this.omavNo = 917;
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



  naitajad = [
    '    Lühiajaliste kohustuste kattekordaja', '    Maksevõime kordaja', 'Rahakordaja'
  ];



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
    
              if (params.value[1] == 0) {var zz = " Lühiajaliste kohustuste kattekordaja"}
              if (params.value[1] == 1) {var zz = " Maksevõime kordaja"}
              if (params.value[1] == 2) {var zz = " Rahakordaja"}
    
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
            return val[2] * 6; ///6;
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
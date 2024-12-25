import { Component, VERSION, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { xtee } from '../xtee/xtee';
import { sektorsuht } from '../graafSisend/sektor';
import { suurussuht } from '../graafSisend/suurus';
import { suurussuhttjt } from '../graafSisend/suurustjt';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'sekts5agraaf',
  templateUrl: './sekts5agraaf.component.html',
  styleUrls: [ './sekts5agraaf.component.scss' ],
  standalone: true,
  imports: [NgxEchartsDirective, ReactiveFormsModule, FormsModule, CommonModule],
  providers: [
    provideEcharts(), 
  ]
})
export class Sekts5agraafComponent implements OnInit  {
  
  //Sisse

  suhtarvArray: any = [];
  suhtarvArray2: any = [];
  oigeSuhtarv: any;
  sectorNo: any;
  sectorNox: any;
  suurusNo: any;

  newdata: any;
  //minuVKK: any;
  //minuLVKaK: any;
  //minuVaKK: any;
  //minuLVKK: any;
  //minuMVK: any;
  //minuRK: any;
  //minuVK: any;
  //minuKOS: any;
  //minuIKK: any;
  //minuAKM: any;
  //minuPKM: any;
  //minuROA: any;
  //minuROE: any;
  minuTJT: any;

  constructor () {
      setInterval (() => {
    this.newdata =  [   //Iga valdkonna jaoks on eraldi datamatrix
      [this.kysiTJT(), 0, 4],  //Esimesel kohal number tähendab näitaja suurust (antud juhul 1.4)
      [this.minuTJT, 0, 4.01]//,
      //[this.kysiPKM(), 1, 4], //Teisel kohal näitaja 0-kõige alumist (Varude käibesagedus), 1-keskmist (Lühiajalise võlgnevuse kattekordaja), 2-kõige kõrgemat (Vara käibesagedus)
      //[this.minuPKM, 1, 4.01], //Kolmandal kohal asuv number 6 - ettevõtte info, 4 - sektori info
      //[this.kysiROA(), 2, 4],
      //[this.minuROA, 2, 4.01],
      //[this.kysiROE(), 3, 4],
      //[this.minuROE, 3, 4.01]
    ];
  }, 3000);
  
  this.sectorNox = xtee.sektorNo;
  this.suurusNo = xtee.size;
  //JSON.stringify(xtee.sektorNo);
  //this.kysiLahtevaldkond();
  //this.minuVKK = Math.round((xtee.VKK)*100)/100;
  //this.minuLVKaK = Math.round((xtee.LVKaK)*100)/100;
  //this.minuVaKK = Math.round((xtee.VaKK)*100)/100;
  //this.minuLVKK = Math.round((xtee.LVKK)*100)/100;
  //this.minuMVK = Math.round((xtee.MVK)*100)/100;
  //this.minuRK = Math.round((xtee.RK)*100)/100;
  //this.minuVK = Math.round((xtee.VK)*100)/100;
  //this.minuKOS = Math.round((xtee.KOS)*100)/100;
  //this.minuIKK = Math.round((xtee.IKK)*100)/100;
  //this.minuAKM = Math.round((xtee.AKM)*100)/100;
  //this.minuPKM = Math.round((xtee.PKM)*100)/100;
  //this.minuROA = Math.round((xtee.ROA)*100)/100;
  //this.minuROE = Math.round((xtee.ROE)*100)/100;
  this.minuTJT = Math.round((xtee.TJT)*100)/100;
  }
  //this.varudeKaibesagedus = Math.round((this.varudeKaibesagedus)*100)/100;
  //sektor = this.sectorNo;

  //varude käibesagedus VKK
  varudeKaibesagedus: any = 0.1;
  //lyhVolgnKaibek:any = 0.1;
  //varKaibesag:any = 0.1;
  ////lyhikohKattekord: any = 0.1;
  //maksevKord:any = 0.1;
  //rahaKord:any = 0.1;
  //volaKord: any = 0.1;
  //kohOmak:any = 0.1;
  //intressKate:any = 0.1;

  kaibeArirent: any = 0.1;
  kaibePuhasrent: any = 0.1;
  varaPuhasrent: any = 0.1;
  omakPuhasrent: any = 0.1;
  toojouTootl: any = 0.1;

  suhtarvuvalik() {

    for (let key in sektorsuht) {
      if (sektorsuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(sektorsuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.ettevotte_suurusklass === this.suurusNo;
      ///return e.sektor_nr === this.sectorNo;////sektor;
  })
  /////console.log("uhtarvarray", this.suhtarvArray);
  /////console.log("uhtarv", this.oigeSuhtarv);
  /////console.log("yksarv", this.oigeSuhtarv[0]);
  ////console.log("yksarvAKM0714", this.oigeSuhtarv[0].AKM);
  this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
  //return this.oigeSuhtarv;
  }

  kysiTJT() {   //Ettevõtte tööjõu tootlikkus.'0
    for (let key in suurussuhttjt) {
      if (suurussuhttjt.hasOwnProperty(key)) {
        this.suhtarvArray2.push(suurussuhttjt[key]);
      }
    }
    ///console.log("trykimeterviku", this.suhtarvArray2); //õige
    this.oigeSuhtarv= this.suhtarvArray2.filter(e=>{
      return e.ettevotte_suurusklass === this.suurusNo;////omavalitsuse number;
  })
    ///console.log("omavalitsuse number", this.omavNo); //õige
    this.toojouTootl = this.oigeSuhtarv[0].kmd_tsd;
   /// console.log("otsimetoojoudu", this.oigeSuhtarv[0]);
    //this.lyhVolgnKaibek = this.oigeSuhtarv[0].LVKAK;
    this.toojouTootl = Math.round((this.toojouTootl)*100)/100;
  return this.toojouTootl;
  }

  kysiAKM() {   //Ettevõtte käibe ärirentaablus. 0
  //kysiVK() {   //Ettevõtte võlakordaja. 0
  //kysiLVKK() {  //Ettevõtte lühiajaliste kohustuste kattekordaja. 0
  //kysiVKK() {   //Ettevõtte varude käibesagedus. 0
    for (let key in suurussuht) {
      if (suurussuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(suurussuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      ////return e.sektor_nr === this.sectorNo;////sektor;
      return e.ettevotte_suurusklass === this.suurusNo;
  })
    this.kaibeArirent = this.oigeSuhtarv[0].AKM;
    //this.volaKord = this.oigeSuhtarv[0].VK;
    //this.lyhikohKattekord = this.oigeSuhtarv[0].LVKK;
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
    ////console.log("yksarv", this.oigeSuhtarv[0]);
    //this.lyhVolgnKaibek = this.oigeSuhtarv[0].LVKAK;
    this.kaibeArirent = Math.round((this.kaibeArirent)*100)/100;
  return this.kaibeArirent;
  }

  kysiPKM() {  //Ettevõtte käibe puhasrentaablus. 1
  //kysiKOS() {  //Ettevõtte kohustuste ja omakapitali suhe. 1
  //kysiMVK() {  //Ettevõtte maksevõime kordaja. 1
  //kysiLVKAK() {  //Ettevõtte lühiajalise võlgnevuse käibekordaja. 1
    for (let key in sektorsuht) {
      if (sektorsuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(sektorsuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      ////return e.sektor_nr === this.sectorNo;////sektor;
      return e.ettevotte_suurusklass === this.suurusNo;
  })
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
    this.kaibePuhasrent = this.oigeSuhtarv[0].PKM;
    //this.kohOmak = this.oigeSuhtarv[0].KOS;
    //this.maksevKord = this.oigeSuhtarv[0].MVK;
    //this.lyhVolgnKaibek = this.oigeSuhtarv[0].LVKAK;
    this.kaibePuhasrent = Math.round((this.kaibePuhasrent)*100)/100;
  
  return this.kaibePuhasrent;
  }

  kysiROA() {  //Ettevõtte varade puhasrentaablus. 2
  //kysiIKK() {  //Ettevõtte intresside kattekordaja. 2
  //kysiRK() {  //Ettevõtte rahakordaja. 2
  //kysiVAKK() {  //Ettevõtte varade käibesagedus. 2
    for (let key in sektorsuht) {
      if (sektorsuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(sektorsuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      ////return e.sektor_nr === this.sectorNo;////sektor;
      return e.ettevotte_suurusklass === this.suurusNo;
  })
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
    //this.varKaibesag = this.oigeSuhtarv[0].VAKK;
    this.varaPuhasrent = this.oigeSuhtarv[0].ROA;
    //this.intressKate = this.oigeSuhtarv[0].IKK;
    //this.rahaKord = this.oigeSuhtarv[0].RK;
    this.varaPuhasrent = Math.round((this.varaPuhasrent)*100)/100;
  
  return this.varaPuhasrent;
  }

  kysiROE() {  //Ettevõtte omakapitali puhasrentaablus. 3
    for (let key in sektorsuht) {
      if (sektorsuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(sektorsuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.ettevotte_suurusklass === this.suurusNo;
      //return e.sektor_nr === this.sectorNo;////sektor;
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
  options2 = ['Vähem kui 10', '10 kuni 49', '50 kuni 249', 'Vähemalt 250'];
  testSubscription: Subscription;
  
  
  
  ////valdkonnake = "Loomakasvatus";
  valdkonnake2: string;
  kysiLahtevaldkond() {

    for (let key in suurussuht) {
      if (suurussuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(suurussuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      return e.ettevotte_suurusklass === this.suurusNo;////sektor;
  })

  ////console.log("yksarv", this.oigeSuhtarv[0]);
  ////console.log("sektroinumber", this.sectorNox);
    //this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
  this.valdkonnake2 = this.oigeSuhtarv[0].suurusgrupp;
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
      if (this.valdkonnake2 == 'Vähem kui 10') {
        this.valdkonnaandmed = this.newdata;
        this.suurusNo = 1;
      }

      if (this.valdkonnake2 == '10 kuni 49') {
        this.valdkonnaandmed = this.newdata;
        this.suurusNo = 2;
      }

      if (this.valdkonnake2 == '50 kuni 249') {
        this.valdkonnaandmed = this.newdata;
        this.suurusNo = 3;
      }

      if (this.valdkonnake2 == 'Vähemalt 250') {
        this.valdkonnaandmed = this.newdata;
        this.suurusNo = 4;
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
    '     Tööjõu tootlikkus'];



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
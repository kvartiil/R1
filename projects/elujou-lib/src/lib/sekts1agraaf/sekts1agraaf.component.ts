import { Component, VERSION, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { xtee } from '../xtee/xtee';
import { sektorsuht } from '../graafSisend/sektor';
import { suurussuht } from '../graafSisend/suurus';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'sekts1agraaf',
  templateUrl: './sekts1agraaf.component.html',
  styleUrls: [ './sekts1agraaf.component.scss' ],
  standalone: true,
  imports: [NgxEchartsDirective, ReactiveFormsModule, FormsModule, CommonModule],
  providers: [
    provideEcharts(), 
  ]
})
export class Sekts1agraafComponent implements OnInit  {
  
  //Sisse

  suhtarvArray: any = [];
  oigeSuhtarv: any;
  sectorNo: any;
  sectorNox: any;
  suurusNo: any;

  newdata: any;
  minuVKK: any;
  minuLVKaK: any;
  minuVaKK: any;

  constructor () {
      setInterval (() => {
    this.newdata =  [   //Iga valdkonna jaoks on eraldi datamatrix
      [this.kysiVKK(), 0, 4],  //Esimesel kohal number tähendab näitaja suurust (antud juhul 1.4)
      [this.minuVKK, 0, 4.01],
      [this.kysiLVKAK(), 1, 4], //Teisel kohal näitaja 0-kõige alumist (Varude käibesagedus), 1-keskmist (Lühiajalise võlgnevuse kattekordaja), 2-kõige kõrgemat (Vara käibesagedus)
      [this.minuLVKaK, 1, 4.01], //Kolmandal kohal asuv number 6 - ettevõtte info, 4 - sektori info
      [this.kysiVAKK(), 2, 4],
      [this.minuVaKK, 2, 4.01]
    ];
  }, 3000);
  
  this.sectorNox = xtee.sektorNo;
  this.suurusNo = xtee.size;
  //JSON.stringify(xtee.sektorNo);
  //this.kysiLahtevaldkond();
  this.minuVKK = Math.round((xtee.VKK)*100)/100;
  this.minuLVKaK = Math.round((xtee.LVKaK)*100)/100;
  this.minuVaKK = Math.round((xtee.VaKK)*100)/100;
  }
  //this.varudeKaibesagedus = Math.round((this.varudeKaibesagedus)*100)/100;
  //sektor = this.sectorNo;

  //varude käibesagedus VKK
  varudeKaibesagedus: any = 0.1;
  lyhVolgnKaibek:any = 0.1;
  varKaibesag:any = 0.1;

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

  kysiVKK() {   //Ettevõtte varude käibesagedus. 0
    for (let key in suurussuht) {
      if (suurussuht.hasOwnProperty(key)) {
        this.suhtarvArray.push(suurussuht[key]);
      }
    }
    this.oigeSuhtarv= this.suhtarvArray.filter(e=>{
      ////return e.sektor_nr === this.sectorNo;////sektor;
      return e.ettevotte_suurusklass === this.suurusNo;
  })
    this.varudeKaibesagedus = this.oigeSuhtarv[0].VKK;
    ////console.log("yksarv", this.oigeSuhtarv[0]);
    //this.lyhVolgnKaibek = this.oigeSuhtarv[0].LVKAK;
    this.varudeKaibesagedus = Math.round((this.varudeKaibesagedus)*100)/100;
  return this.varudeKaibesagedus;
  }

  kysiLVKAK() {  //Ettevõtte lühiajalise võlgnevuse käibekordaja. 1
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
    this.lyhVolgnKaibek = this.oigeSuhtarv[0].LVKAK;
    this.lyhVolgnKaibek = Math.round((this.lyhVolgnKaibek)*100)/100;
  
  return this.lyhVolgnKaibek;
  }

  kysiVAKK() {  //Ettevõtte varade käibesagedus. 2
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
    this.varKaibesag = this.oigeSuhtarv[0].VAKK;
    this.varKaibesag = Math.round((this.varKaibesag)*100)/100;
  
  return this.varKaibesag;
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
    'Varude käibesagedus', '    Lühiajalise võlgnevuse käibekordaja', 'Vara käibesagedus'
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
    
              if (params.value[1] == 0) {var zz = " Varude käibesagedus"}
              if (params.value[1] == 1) {var zz = " Lühiajalise võlgnevuse käibekordaja"}
              if (params.value[1] == 2) {var zz = " Vara käibesagedus"}
    
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
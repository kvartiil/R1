import { Component, OnInit } from '@angular/core';
import { xtee } from '../xtee/xtee';
//import { NgxEchartsModule } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'graaf10',
  templateUrl: './graaf10.component.html',
  styleUrls: [ './graaf10.component.scss' ],
  standalone: true,
  imports: [NgxEchartsDirective, XteechangeComponent],
  //imports: [ NgxEchartsDirective ],
  providers: [
    provideEcharts(),
  ]
})
export class Graaf10Component implements OnInit  {
  //name = 'Angular ' + VERSION.major;
  options: any; 

  
  key: string = 'efektMadal';
  localValue: string = '';
  myItem: string;
  myItem2: number;

  getEfektMadal() {
    this.myItem2 = xtee.model1y1;
    //this.myItem = localStorage.getItem(this.key);
    //this.myItem2=Number(this.myItem);
    return this.myItem2;
  }

  key2: string = 'efektKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getEfektKeskmine() {
    this.keskmineNumber = xtee.model1y2;
    //this.keskmineString = localStorage.getItem(this.key2);
    //this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'efektKorge';
  korgeString: string;
  korgeNumber: number;

  getEfektKorge() {
    //this.korgeString = localStorage.getItem(this.key3);
    //this.korgeNumber=Number(this.korgeString);
    this.korgeNumber = xtee.model1y3;
    return this.korgeNumber;
  }


  EfMadalValue: number;
  EfKorgeValue: number;

  korgevaart(){
    //setInterval (() => {
            //this.value = Math.floor((Math.random() * 2000) + 1);
            this.EfKorgeValue =this.getEfektKorge();
      //}, 7000);
      return this.EfKorgeValue;
  }


  keym: string = 'makseMadal';
  localValuem: string = '';
  madalStringm: string;
  madalNumberm: number;

getMakseMadal() {
    //this.madalStringm = localStorage.getItem(this.keym);
    //this.madalNumberm=Number(this.madalStringm);
    this.madalNumberm = xtee.model2y1;
    return this.madalNumberm;
  }

  key2m: string = 'makseKeskmine';
  keskmineStringm: string;
  keskmineNumberm: number;

  getMakseKeskmine() {
    //this.keskmineStringm = localStorage.getItem(this.key2m);
    //this.keskmineNumberm=Number(this.keskmineStringm);
    this.keskmineNumberm = xtee.model2y2;
    return this.keskmineNumberm;
  }

  key3m: string = 'makseKorge';
  korgeStringm: string;
  korgeNumberm: number;

  getMakseKorge() {
    //this.korgeStringm = localStorage.getItem(this.key3m);
    //this.korgeNumberm=Number(this.korgeStringm);
    this.korgeNumberm = xtee.model2y3;
    return this.korgeNumberm;
  }


  keyv: string = 'voimMadal';
  localValuev: string = '';
  madalStringv: string;
  madalNumberv: number;

  getVoimMadal() {
    //this.madalStringv = localStorage.getItem(this.keyv);
    //this.madalNumberv=Number(this.madalStringv);
    this.madalNumberv = xtee.model3y1;
    return this.madalNumberv;
  }

  key2v: string = 'voimKeskmine';
  keskmineStringv: string;
  keskmineNumberv: number;

  getVoimKeskmine() {
    //this.keskmineStringv = localStorage.getItem(this.key2v);
    //this.keskmineNumberv=Number(this.keskmineStringv);
    this.keskmineNumberv = xtee.model3y2;
    return this.keskmineNumberv;
  }

  key3v: string = 'voimKorge';
  korgeStringv: string;
  korgeNumberv: number;

  getVoimKorge() {
    //this.korgeStringv = localStorage.getItem(this.key3v);
    //this.korgeNumberv=Number(this.korgeStringv);
    this.korgeNumberv = xtee.model3y3;
    return this.korgeNumberv;
  }


  keyt: string = 'tasuvMadal';
  localValuet: string = '';
  madalStringt: string;
  madalNumbert: number;

  getTasuvMadal() {
    //this.madalStringt = localStorage.getItem(this.keyt);
    //this.madalNumbert=Number(this.madalStringt);
    this.madalNumbert = xtee.model4y1;
    return this.madalNumbert;
  }

  key2t: string = 'tasuvKeskmine';
  keskmineStringt: string;
  keskmineNumbert: number;

  getTasuvKeskmine() {
    //this.keskmineStringt = localStorage.getItem(this.key2t);
    //this.keskmineNumbert=Number(this.keskmineStringt);
    this.keskmineNumbert = xtee.model4y2;
    return this.keskmineNumbert;
  }

  key3t: string = 'tasuvKorge';
  korgeStringt: string;
  korgeNumbert: number;

  getTasuvKorge() {
    //this.korgeStringt = localStorage.getItem(this.key3t);
    //this.korgeNumbert=Number(this.korgeStringt);
    this.korgeNumbert = xtee.model4y3;
    return this.korgeNumbert;
  }


  keyj: string = 'toojoudMadal';
  localValuej: string = '';
  madalStringj: string;
  madalNumberj: number;

  getToojoudMadal() {
    //this.madalStringj = localStorage.getItem(this.keyj);
    //this.madalNumberj=Number(this.madalStringj);
    this.madalNumberj = xtee.model5y1;
    return this.madalNumberj;
  }

  key2j: string = 'toojoudKeskmine';
  keskmineStringj: string;
  keskmineNumberj: number;

  getToojoudKeskmine() {
    //this.keskmineStringj = localStorage.getItem(this.key2j);
    //this.keskmineNumberj=Number(this.keskmineStringj);
    this.keskmineNumberj = xtee.model5y2;
    return this.keskmineNumberj;
  }

  key3j: string = 'toojoudKorge';
  korgeStringj: string;
  korgeNumberj: number;

  getToojoudKorge() {
    //this.korgeStringj = localStorage.getItem(this.key3j);
    //this.korgeNumberj=Number(this.korgeStringj);
    this.korgeNumberj = xtee.model5y3;
    return this.korgeNumberj;
  }











//  update() {
//    this.ngOnInit();
//} 
  
data = [];
datake = [];
datako = [];
datalabel = [];

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

  if (xtee.model5y1) {

    this.data = [
      (this.effmadalNumber*100),
      (this.maksmadalNumber*100),
      (this.voimmadalNumber*100),
      (this.tasumadalNumber*100),
      (this.toomadalNumber*100) 
      ];

    this.datake = [
      (this.effkeskmineNumber*100), 
      (this.makskeskmineNumber*100),
      (this.voimkeskmineNumber*100),
      (this.tasukeskmineNumber*100),
      (this.tookeskmineNumber*100)
      ];

    this.datako = [
      (this.effkorgeNumber*100),            
      (this.makskorgeNumber*100),
      (this.voimkorgeNumber*100),
      (this.tasukorgeNumber*100),
      (this.tookorgeNumber*100)
      ];

    this.datalabel = ['Efektiivsus', 'Maksevõime', 'Võimendus', 'Tasuvus', 'Tööjõud'];
    
  }
  else {
    this.data = [
      (this.effmadalNumber*100),
      (this.maksmadalNumber*100),
      (this.voimmadalNumber*100),
      (this.tasumadalNumber*100)
      ];
    
    this.datake = [
      (this.effkeskmineNumber*100), 
      (this.makskeskmineNumber*100),
      (this.voimkeskmineNumber*100),
      (this.tasukeskmineNumber*100)
      ];

    this.datako = [
      (this.effkorgeNumber*100),            
      (this.makskorgeNumber*100),
      (this.voimkorgeNumber*100),
      (this.tasukorgeNumber*100)
      ];

    this.datalabel = ['Efektiivsus', 'Maksevõime', 'Võimendus', 'Tasuvus'];    

  }
  

};


  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    //for (let i = 0; i < 100; i++) {
    //  xAxisData.push('category' + i);
    //  data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
    //  data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    //}

    this.options = {
      legend: {
        data: ['Madal', 'Keskmine', 'Kõrge'],
        align: 'left',
      },
      tooltip: {},
      label: {
        show: true,
        //formatter: '(params)+ %'
        formatter: (params) => Math.round(params.value * 10) / 10 + '%'
      },
      
      xAxis: {
        //data: xAxisData,
        //data: ['A', 'B', 'C', 'D', 'E'],
        silent: false,
        type: 'value',
        //label: {
        //  show: true,
          //formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
        //},
        //position: 'top',
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: '{value}%',
          align: 'center'
          // ...
        },
        axisLine: {onZero: false},
      },
      yAxis: {
        type: 'category',
        data: this.datalabel,
        //data: ['Efektiivsus', 'Maksevõime', 'Võimendus', 'Tasuvus', 'Tööjõud'],
        inverse: true
        
      },
      series: [
        {
          name: 'Madal',
          type: 'bar',
          //stack: 'total',
          //stack: '1',
          stack: 'x',
          //data: data1,
          data: this.data,
          //data: [
          //  (this.getEfektMadal()*100),
          //  (this.getMakseMadal()*100),
          //  (this.getVoimMadal()*100),
          //  (this.getTasuvMadal()*100),
          //  (this.getToojoudMadal()*100) 
          //  ],
        //  markLine: {
        //    data: [{
        //            name: 'Maksimum',
        //            type: 'max'
         //       },
        //        {
        //            name: 'Miinimum',
        //            type: 'min'
        //        }
        //    ]
        //},
          color: ['#EFB2B2'],
          animationDelay: (idx) => idx * 1000,
        },
        {
          name: 'Keskmine',
          type: 'bar',
          stack: 'x',
          //stack: '1',
          data: this.datake,
          //data: [
          //  (this.getEfektKeskmine()*100), 
          //  (this.getMakseKeskmine()*100),
          //  (this.getVoimKeskmine()*100),
          //  (this.getTasuvKeskmine()*100),
          //  (this.getToojoudKeskmine()*100)
          //  ],
        //  markLine: {
        //    data: [{
        //            name: 'Maksimum',
        //            type: 'max',
        //        },
        //        {
        //            name: 'Miinimum',
        //            type: 'min',
        //        }
        //    ]
        //},
          color: ['#FFE1A0'],
          //data: data2,
          animationDelay: (idx) => idx * 1000 + 1000,
        },

        {
          name: 'Kõrge',
          type: 'bar',
          stack: 'x',
          //stack: '1',
          data: this.datako,
        //  data: [
        //    (this.getEfektKorge()*100),            
        //    (this.getMakseKorge()*100),
        //    (this.getVoimKorge()*100),
        //    (this.getTasuvKorge()*100),
        //    (this.getToojoudKorge()*100)
        //    ],
        //  markLine: {
        //    data: [{
        //            name: 'Maksimum',
        //            type: 'max',
        //        },
        //        {
        //            name: 'Miinimum',
        //            type: 'min',
        //        }
        //    ]
        //},
          color: ['#ACCFBA'],
          //data: data2,
          animationDelay: (idx) => idx * 1000 + 1000,
        },





5      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx) => idx * 5,
    };
  }









}
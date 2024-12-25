import { Component, VERSION, OnInit } from '@angular/core';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';

@Component({
  selector: 'graafmudelvoim',
  templateUrl: './graafMudelVoim.component.html',
  styleUrls: [ './graafMudelVoim.component.scss' ],
  standalone: true,
  imports: [NgxEchartsDirective, XteechangeComponent],
  providers: [
    provideEcharts(),
  ]
})
export class GraafMudelVoimComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  voimmadal: any;
  voimkeskmine: any;
  voimkorge: any;
  voimmadalNumber: number;
  voimkeskmineNumber: number;
  voimkorgeNumber: number;

  constructor () {
    this.voimmadal = new XteechangeComponent;
    this.voimmadalNumber = this.voimmadal.model3y1;
    this.voimkeskmine = new XteechangeComponent;
    this.voimkeskmineNumber = this.voimkeskmine.model3y2;
    this.voimkorge = new XteechangeComponent;
    this.voimkorgeNumber = this.voimkorge.model3y3;
  }

  key: string = 'voimMadal';
  localValue: string = '';
  madalString: string;
  madalNumber: number;

  getVoimMadal() {
    this.madalString = localStorage.getItem(this.key);
    this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'voimKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getVoimKeskmine() {
    this.keskmineString = localStorage.getItem(this.key2);
    this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'voimKorge';
  korgeString: string;
  korgeNumber: number;

  getVoimKorge() {
    this.korgeString = localStorage.getItem(this.key3);
    this.korgeNumber=Number(this.korgeString);
    return this.korgeNumber;
  }







  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
                
      title: {
        text: '',
        left: 'center',
        top: 'center'
      },
      color: ['#EFB2B2', '#FFE1A0', '#ACCFBA'],
      series: [
        {
          type: 'pie',
          data: [
            {
              value: this.voimmadalNumber,//getVoimMadal(),
              name: 'Madal'
            },
            {
              value: this.voimkeskmineNumber,//getVoimKeskmine(),
              name: 'Keskmine'
            },
            {
              value: this.voimkorgeNumber,//getVoimKorge(),
              name: 'Kõrge'
            }
          ],
          radius: ['40%', '70%']
        }
      ]
        
    };
  }
}
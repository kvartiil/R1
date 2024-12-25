import { Component, VERSION, OnInit } from '@angular/core';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';


@Component({
  selector: 'graafmudelmaks',
  templateUrl: './graafMudelMaks.component.html',
  styleUrls: [ './graafMudelMaks.component.scss' ],
  standalone: true,
  imports: [ XteechangeComponent, NgxEchartsDirective],
  providers: [
    provideEcharts(),
  ]
})
export class GraafMudelMaksComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  maksmadal: any;
  makskeskmine: any;
  makskorge: any;
  maksmadalNumber: number;
  makskeskmineNumber: number;
  makskorgeNumber: number;

  constructor () {

    this.maksmadal = new XteechangeComponent;
    this.maksmadalNumber = this.maksmadal.model2y1;
    this.makskeskmine = new XteechangeComponent;
    this.makskeskmineNumber = this.makskeskmine.model2y2;
    this.makskorge = new XteechangeComponent;
    this.makskorgeNumber = this.makskorge.model2y3;

  }

  
  key: string = 'makseMadal';
  localValue: string = '';
  madalString: string;
  madalNumber: number;

getMakseMadal() {
    this.madalString = localStorage.getItem(this.key);
    this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'makseKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getMakseKeskmine() {
    this.keskmineString = localStorage.getItem(this.key2);
    this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'makseKorge';
  korgeString: string;
  korgeNumber: number;

  getMakseKorge() {
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
              value: this.maksmadalNumber,//getMakseMadal(),
              name: 'Madal'
            },
            {
              value: this.makskeskmineNumber,//getMakseKeskmine(),
              name: 'Keskmine'
            },
            {
              value: this.makskorgeNumber,//getMakseKorge(),
              name: 'Kõrge'
            }
          ],
          radius: ['40%', '70%']
        }
      ]
        
    };
  }
}
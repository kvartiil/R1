import { Component, VERSION, OnInit } from '@angular/core';
//import { NgxEchartsModule } from 'ngx-echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { XteechangeComponent } from '../xteechange/xteechange.component';

@Component({
  selector: 'graafmudeldata',
  templateUrl: './graafMudelData.component.html',
  styleUrls: [ './graafMudelData.component.scss' ],
  standalone: true,
  imports: [NgxEchartsDirective, XteechangeComponent],
  providers: [
    provideEcharts(),
  ]
})
export class GraafMudelDataComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  toomadal: any;
  tookeskmine: any;
  tookorge: any;
  toomadalNumber: number;
  tookeskmineNumber: number;
  tookorgeNumber: number;

  constructor () {
    this.toomadal = new XteechangeComponent; 
    this.toomadalNumber = this.toomadal.model5y1;
    this.tookeskmine = new XteechangeComponent;
    this.tookeskmineNumber = this.tookeskmine.model5y2;
    this.tookorge = new XteechangeComponent;
    this.tookorgeNumber = this.tookorge.model5y3;
  }

  key: string = 'toojoudMadal';
  localValue: string = '';
  madalString: string;
  madalNumber: number;

  getToojoudMadal() {
    this.madalString = localStorage.getItem(this.key);
    this.madalNumber=Number(this.madalString);
    return this.madalNumber;
  }

  key2: string = 'toojoudKeskmine';
  keskmineString: string;
  keskmineNumber: number;

  getToojoudKeskmine() {
    this.keskmineString = localStorage.getItem(this.key2);
    this.keskmineNumber=Number(this.keskmineString);
    return this.keskmineNumber;
  }

  key3: string = 'toojoudKorge';
  korgeString: string;
  korgeNumber: number;

  getToojoudKorge() {
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
        text: 'Andmed puudu',
        left: 'center',
        top: 'center'
      },
      color: ['#dbdfe2', '#5d6071', '#f2f3f3'],
      series: [
        {
          type: 'pie',
          data: [
            {
              value: 100,//getToojoudMadal(),
              name: 'Mudelisisendit pole'
            },
            {
              value: 0,//getToojoudKeskmine(),
              label: {
                show: false }
            },
            {
              value: 0,//getToojoudKorge(),
              label: {
                show: false }
              
            }
          ],
          radius: ['40%', '70%']
        }
      ]
        
    };
  }
}
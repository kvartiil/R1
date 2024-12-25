import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graaf13',
  templateUrl: './graaf13.component.html',
  styleUrls: [ './graaf13.component.scss' ]
})
export class Graaf13Component implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    const hours = [
      'Taimekasvatus', 'Loomakasvatus', 'Põllumajanduslikud abitegevused', 'Metsakasvatus', 'Metsamajanduse abitegevused', '5a', '6a',
      '7a', '8a', '9a','10a','11a',
      '12p', '1p', '2p', '3p', '4p', '5p',
      '6p', '7p', '8p', '9p', '10p', '11p'
    ];
  
  // prettier-ignore
  const days = [
      'Varude käibesagedus', '    Lühiajalise võlgnevuse käibekordaja', 'Vara käibesagedus'
    ];
  
  // prettier-ignore
  const data = [[1,0,27.3],[0,1,1],[0,2,13],[0,3,22],[2,4,12.3],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2]]
      .map(function (item) {
          return [item[1], item[0], item[2]];
      });

    

    this.options = {
   
      title: {
        text: 'Efektiivsuse suhtarvude mediaanväärtused sektorite kaupa'
      },
      legend: {
        data: ['Suhtarvud'],
        left: 'right'
      },
      tooltip: {
        position: 'top',
        formatter: function (params: any) {
          return (
            params.value[2] +
            ' %, sektor: ' +
            hours[params.value[0]] +
            ', näitaja: ' +
            days[params.value[1]]
          );
        }
      },
      grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
          show: true
        },
        axisLabel: {
          interval: 0,
          rotate: 30
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'category',
        data: days,
        axisLine: {
          show: false
        }
      },
      series: [
        {
          name: 'Punch Card',
          type: 'scatter',
          symbolSize: function (val) {
            return val[2] * 2;
          },
          data: data,
          animationDelay: function (idx) {
            return idx * 5;
          }
        }
      ]


    };
    }
}
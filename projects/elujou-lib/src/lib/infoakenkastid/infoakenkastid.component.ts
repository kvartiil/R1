import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


//import { products } from '../products';

@Component({
  selector: 'infoakenkastid-component',
  templateUrl: './infoakenkastid.component.html',
  styleUrls: ['./infoakenkastid.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class InfoakenKastidComponent {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Siinkohal toodud viis värvilist alajaotust (kasti) kirjeldavad igaüks eraldi mudeli tulemust vastava mudeli valdkonna osas, mida vastav mudel andmete pealt leidis. Nende nelja alajaotuse pealt tuleb elujõulisuse koondindikaator, mis on kuvatud avalehel.',
      html: true,
      css: true,
      js: true
    }
  ];

  PopUp(event: Event, element: HTMLDivElement) {
    // element.classList.remove('popup');
    // element.classList.add('test');
    // console.log(element.classList);
    element.classList.toggle('is-visible');
  }
  
}
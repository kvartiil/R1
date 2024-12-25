import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


//import { products } from '../products';

@Component({
  selector: 'infoaken-component',
  templateUrl: './infoaken.component.html',
  styleUrls: ['./infoaken.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class InfoakenComponent {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Suhtarvude põhjal ettevõtte positsiooni hinnates ja seda hinnangut analüüsides on oluline silmas pidada, et suhtarvude väärtused on tinglikud, sõltuvad kontekstist ja neist ei saa teha kindlaid ainuõigeid järeldusi.',
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
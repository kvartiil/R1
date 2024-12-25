import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


//import { products } from '../products';

@Component({
  selector: 'infoakensuhtarv-component',
  templateUrl: './infoakensuhtarv.component.html',
  styleUrls: ['./infoakensuhtarv.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class InfoakenSuhtarvComponent {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Finantssuhtarvude väärtused sõltuvad sektorist, kus ettevõte tegutseb. Igal suhtarvul on oma nn. tavapärane vahemik, kus olukord on normaalne, samuti suurused, milles rohkem/vähem on olukord problemne või hoopis majanduslikult ebaharilikult tugev. Samas ei anna üks konkreetne suhtarv võimalust teha liiga põhjapanevaid järeldusi, neid tuleb vaadata konteksses tervikus ning alati on olemas erandeid.',
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
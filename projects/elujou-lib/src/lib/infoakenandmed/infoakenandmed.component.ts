import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


//import { products } from '../products';

@Component({
  selector: 'infoakenandmed-component',
  templateUrl: './infoakenandmed.component.html',
  styleUrls: ['./infoakenandmed.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class InfoakenAndmedComponent {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Tööjõu tootlikkuse kasvu kirjeldavad andmed on pärit maksudeklaratsioonidest, ehk siis on kuupõhised. Bilansi ja kasumiaruande andmed on majandusaasta aruannetest, ehk siis on aastapõhised.',
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
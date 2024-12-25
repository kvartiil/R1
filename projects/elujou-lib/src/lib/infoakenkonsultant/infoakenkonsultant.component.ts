import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


//import { products } from '../products';

@Component({
  selector: 'infoakenkonsultant-component',
  templateUrl: './infoakenkonsultant.component.html',
  styleUrls: ['./infoakenkonsultant.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class InfoakenKonsultantComponent {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Item 1',
      content:
        'Konsultant saab olla abiks ettevõtte elujõulisuse indeksi arvulise väärtuse sisu tõlgendamisel, finantssuhtarvude tähenduse mõistmisel oma ettevõtte kontekstis, ettevõtte olukorra laiendatud hindamisel, edasise tegevusplaani koostamisel, probleemolukorra põhjuste väljaselgitamisel ja muudes seotud küsimustes.',
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
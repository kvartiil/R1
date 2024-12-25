import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'varav11',
  templateUrl: './varav11.component.html',
  styleUrls: ['./varav11.component.scss'],
  standalone: true,
  imports: [ CommonModule ]
})
export class Varav11Component {
  currentIndex;

  sections = [
    {
      name: 'Laenusisend',
      content:
        'Antakse sisendit, kuidas plaanib ettevõte muuta oma laenukoormust ning süsteem ütleb, et kuidas siis muutub tulemus. Täiendav laen võib olla abiks turuvõimaluste kasutamisel ja kasvamisel, mis aitab kaasa ettevõtte arengule. Samas, kui täiendavat laenu kasutatakse refinantseerimiseks ja kahjumlikkusest tekkindu käibekapitali kao korvamiseks, siis võib täiendav kohustus hoopis negatiivselt mõjuda.',
      }, 
    {
      name: 'Varade muutus',
      content:
        'Antakse sisendit, kas ettevõte plaanib muuta varade hulka ning süsteem ütleb, kuidas see mõjuab elujõulisust. Kui ettevõttel on võimalik kasvada, siis on täiendavad varad vajalikud.  Samas, kui ollakse käibekapitali defitsiidis ning turg on kehvapoolne, siis osade varade müük võib aidata ettevõtte olukorda parandada - ollakse turul väiksemas mahus, kuid see-eest kindlamalt.',
    },
    {
      name: 'Turu muutus',
      content:
        'Kui ettevõttel on võimalik turuolukorda parandada ja seeläbi muude tingimuste samaksjäädes teenida täiendavat kasumit, siis võib see suure tõenäosusega aidata oluliselt kaasa ettevõtte elujõulisuse paranemisele.',
    }
    
  ];





  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  
  expand(index) {
    if(this.currentIndex === index) {
      this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    //alert(this.currentIndex);
    
    if ( this.currentIndex === 0) {
      this.showComponent1 = true;
      this.showComponent2 = false;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
    }
  }

}
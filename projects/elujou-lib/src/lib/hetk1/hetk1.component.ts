import { Component } from '@angular/core';
import { Yld3Component } from '../yld3/yld3.component';
import { InfoakenKastidComponent } from '../infoakenkastid/infoakenkastid.component';

//import { products } from '../products';

@Component({
  selector: 'hetk1-component',
  templateUrl: './hetk1.component.html',
  styleUrls: ['./hetk1.component.scss'],
  standalone: true,
  imports: [Yld3Component, InfoakenKastidComponent]
})
export class Hetk1Component {

  kirjake: string;
  kirjake1 = "Saame öelda, et ettevõtte üldine elujõud on ";
  elunumber: number;
  elunumber2: string;
  hinnang: string;
  kirjake2 = " tasemel. Elujõu koondindikaatori väärtus on ";
  kirjake3 = ". Koondindikaator on elujõulisuse näitaja vahemikus 0–100 (graafiliselt kuvatud"
  kirjake4 = "'Üldinfo'), kus 0 on minimaalne ja 100 maksimaalne. Ülaltoodud joonisel on näidatud ettevõtte elujõud komponentide kaupa kõigi viie kasutatud mudeli järgi. Jooniselt näeb, millised on ettevõtte nõrgad ja tugevad küljed."

  constructor () {
    //this.elunumber = Number(localStorage.getItem('elujoud'));
  
  }


  koostaKiri() {
    this.elunumber = Number(localStorage.getItem('elujoud'));
    this.elunumber2 = this.elunumber.toFixed(2); //toFixed teeb stringiks

    if (this.elunumber < 0.4) {
      this.hinnang = "madalal ";
    }
    else if (this.elunumber < 0.6) {
      this.hinnang = "keskmisel ";
    }
    else {
      this.hinnang = "kõrgel ";
    }

    this.kirjake = this.kirjake1 + this.hinnang + this.kirjake2 + this.elunumber2 + this.kirjake3;

    return this.kirjake;
  }

  koostaKiri2() {

    return this.kirjake4;
  }
  
  
}
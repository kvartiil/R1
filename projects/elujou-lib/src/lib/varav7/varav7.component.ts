import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Sektp1Component } from '../sektp1/sektp1.component';
import { Sektp1aComponent } from '../sektp1a/sektp1a.component';
import { Sektp2Component } from '../sektp2/sektp2.component';
import { Sektp2aComponent } from '../sektp2a/sektp2a.component';
import { Sektp3Component } from '../sektp3/sektp3.component';
import { Sektp3aComponent } from '../sektp3a/sektp3a.component';
import { Sektp4Component } from '../sektp4/sektp4.component';
import { Sektp4aComponent } from '../sektp4a/sektp4a.component';
import { Sektp5Component } from '../sektp5/sektp5.component';
import { Sektp5aComponent } from '../sektp5a/sektp5a.component';

@Component({
  selector: 'varav7',
  templateUrl: './varav7.component.html',
  styleUrls: ['./varav7.component.scss'],
  standalone: true,
  imports: [CommonModule, Sektp1Component, Sektp1aComponent, Sektp2Component, Sektp2aComponent, Sektp3Component, Sektp3aComponent, Sektp4Component, Sektp4aComponent, Sektp5Component, Sektp5aComponent]
})
export class Varav7Component {
  currentIndex;

  sections = [
    {
      name: 'Efektiivsus',
      content: 'Content 1'
    },
    {
      name: 'Maksevõime',
      content: '<progn1-component></progn1-component>'
    },
    {
      name: 'Finantsvõimendus',
      content: ''
    },
    {
      name: 'Tasuvus',
      content: ''
    },
    {
      name: 'Tööjõu tootlikkus',
      content: ''
    }

  ];
  showComponent1: boolean = false;
  showComponent2: boolean = false;
  showComponent3: boolean = false;
  showComponent4: boolean = false;
  showComponent5: boolean = false;

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
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 1) {
      this.showComponent1 = false;
      this.showComponent2 = true;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 2) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = true;
      this.showComponent4 = false;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 3) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = true;
      this.showComponent5 = false;
    }
    else if ( this.currentIndex === 4) {
      this.showComponent1 = false;
      this.showComponent2 = false;
      this.showComponent3 = false;
      this.showComponent4 = false;
      this.showComponent5 = true;
    }
  }

}
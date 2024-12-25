import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Sekts1Component } from '../sekts1/sekts1.component';
import { Sekts1aComponent } from '../sekts1a/sekts1a.component';
import { Sekts2Component } from '../sekts2/sekts2.component';
import { Sekts2aComponent } from '../sekts2a/sekts2a.component';
import { Sekts3Component } from '../sekts3/sekts3.component';
import { Sekts3aComponent } from '../sekts3a/sekts3a.component';
import { Sekts4Component } from '../sekts4/sekts4.component';
import { Sekts4aComponent } from '../sekts4a/sekts4a.component';
import { Sekts5Component } from '../sekts5/sekts5.component';
import { Sekts5aComponent } from '../sekts5a/sekts5a.component';

@Component({
  selector: 'varav8',
  templateUrl: './varav8.component.html',
  styleUrls: ['./varav8.component.scss'],
  standalone: true,
  imports: [CommonModule, Sekts1Component, Sekts1aComponent, Sekts2Component, Sekts2aComponent, Sekts3Component, Sekts3aComponent, Sekts4Component, Sekts4aComponent, Sekts5Component, Sekts5aComponent]
})
export class Varav8Component {
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
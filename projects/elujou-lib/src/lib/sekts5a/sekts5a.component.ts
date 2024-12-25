import { Component } from '@angular/core';
import { Tabele5Component } from '../tabele5/tabele5.component';
import { Sekts5agraafComponent } from '../sekts5agraaf/sekts5agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sekts5a-component',
  templateUrl: './sekts5a.component.html',
  styleUrls: ['./sekts5a.component.scss'],
  standalone: true,
  imports: [ Tabele5Component, Sekts5agraafComponent ]
})
export class Sekts5aComponent {
  
}
import { Component } from '@angular/core';
import { Tabele2Component } from '../tabele2/tabele2.component';
import { Sekts2agraafComponent } from '../sekts2agraaf/sekts2agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sekts2a-component',
  templateUrl: './sekts2a.component.html',
  styleUrls: ['./sekts2a.component.scss'],
  standalone: true,
  imports: [Tabele2Component, Sekts2agraafComponent]
})
export class Sekts2aComponent {
  
}
import { Component } from '@angular/core';
import { Tabele1Component } from '../tabele1/tabele1.component';
import { Sekts1agraafComponent } from '../sekts1agraaf/sekts1agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sekts1a-component',
  templateUrl: './sekts1a.component.html',
  styleUrls: ['./sekts1a.component.scss'],
  standalone: true,
  imports: [Tabele1Component, Sekts1agraafComponent]
})
export class Sekts1aComponent {
  
}
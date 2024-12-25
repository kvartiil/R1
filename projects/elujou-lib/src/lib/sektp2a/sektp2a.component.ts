import { Component } from '@angular/core';
import { Tabele2Component } from '../tabele2/tabele2.component';
import { Sektp2agraafComponent } from '../sektp2agraaf/sektp2agraaf.component';
//import { products } from '../products';

@Component({
  selector: 'sektp2a-component',
  templateUrl: './sektp2a.component.html',
  styleUrls: ['./sektp2a.component.scss'],
  standalone: true,
  imports: [Tabele2Component, Sektp2agraafComponent]
})
export class Sektp2aComponent {
  
}
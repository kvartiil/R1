import { Component } from '@angular/core';
import { Tabele1Component } from '../tabele1/tabele1.component';
import { Sektp1agraafComponent } from '../sektp1agraaf/sektp1agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sektp1a-component',
  templateUrl: './sektp1a.component.html',
  styleUrls: ['./sektp1a.component.scss'],
  standalone: true,
  imports: [Tabele1Component, Sektp1agraafComponent]
})
export class Sektp1aComponent {
  
}
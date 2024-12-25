import { Component } from '@angular/core';
import { Tabele4Component } from '../tabele4/tabele4.component';
import { Sekts4agraafComponent } from '../sekts4agraaf/sekts4agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sekts4a-component',
  templateUrl: './sekts4a.component.html',
  styleUrls: ['./sekts4a.component.scss'],
  standalone: true,
  imports: [Tabele4Component, Sekts4agraafComponent]
})
export class Sekts4aComponent {
  
}
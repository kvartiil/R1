import { Component } from '@angular/core';
import { Tabele3Component } from '../tabele3/tabele3.component';
import { Sektp3agraafComponent } from '../sektp3agraaf/sektp3agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sektp3a-component',
  templateUrl: './sektp3a.component.html',
  styleUrls: ['./sektp3a.component.scss'],
  standalone: true,
  imports: [Tabele3Component, Sektp3agraafComponent]
})
export class Sektp3aComponent {
  
}
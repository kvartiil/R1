import { Component } from '@angular/core';
import { Tabele3Component } from '../tabele3/tabele3.component';
import { Sekts3agraafComponent } from '../sekts3agraaf/sekts3agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sekts3a-component',
  templateUrl: './sekts3a.component.html',
  styleUrls: ['./sekts3a.component.scss'],
  standalone: true,
  imports: [Tabele3Component, Sekts3agraafComponent]
})
export class Sekts3aComponent {
  
}
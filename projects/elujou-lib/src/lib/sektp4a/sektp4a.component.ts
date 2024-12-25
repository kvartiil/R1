import { Component } from '@angular/core';
import { Tabele4Component } from '../tabele4/tabele4.component';
import { Sektp4agraafComponent } from '../sektp4agraaf/sektp4agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sektp4a-component',
  templateUrl: './sektp4a.component.html',
  styleUrls: ['./sektp4a.component.scss'],
  standalone: true,
  imports: [Tabele4Component, Sektp4agraafComponent]
})
export class Sektp4aComponent {
  
}
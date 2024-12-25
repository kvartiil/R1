import { Component } from '@angular/core';
import { Tabele5Component } from '../tabele5/tabele5.component';
import { Sektp5agraafComponent } from '../sektp5agraaf/sektp5agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sektp5a-component',
  templateUrl: './sektp5a.component.html',
  styleUrls: ['./sektp5a.component.scss'],
  standalone: true,
  imports: [Tabele5Component, Sektp5agraafComponent]
})
export class Sektp5aComponent {
  
}
import { Component } from '@angular/core';
import { Tabele1Component } from '../tabele1/tabele1.component';

//import { products } from '../products';

@Component({
  selector: 'sekts1-component',
  templateUrl: './sekts1.component.html',
  styleUrls: ['./sekts1.component.scss'],
  standalone: true,
  imports: [Tabele1Component]
})
export class Sekts1Component {
  
}
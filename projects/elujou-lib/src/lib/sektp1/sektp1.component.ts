import { Component } from '@angular/core';
import { Tabele1Component } from '../tabele1/tabele1.component';

//import { products } from '../products';

@Component({
  selector: 'sektp1-component',
  templateUrl: './sektp1.component.html',
  styleUrls: ['./sektp1.component.scss'],
  standalone: true,
  imports: [Tabele1Component]
})
export class Sektp1Component {
  
}
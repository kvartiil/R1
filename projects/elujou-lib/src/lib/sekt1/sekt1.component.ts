import { Component } from '@angular/core';
import { Tabele1Component } from '../tabele1/tabele1.component';

//import { products } from '../products';

@Component({
  selector: 'sekt1-component',
  templateUrl: './sekt1.component.html',
  styleUrls: ['./sekt1.component.scss'],
  imports: [Tabele1Component],
  standalone: true
})
export class Sekt1Component {
  
}
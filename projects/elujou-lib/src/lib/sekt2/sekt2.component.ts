import { Component } from '@angular/core';
import { Tabele2Component } from '../tabele2/tabele2.component';

//import { products } from '../products';

@Component({
  selector: 'sekt2-component',
  templateUrl: './sekt2.component.html',
  styleUrls: ['./sekt2.component.scss'],
  standalone: true,
  imports: [Tabele2Component]
})
export class Sekt2Component {
  
}
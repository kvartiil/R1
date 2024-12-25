import { Component } from '@angular/core';
import { Tabele2Component } from '../tabele2/tabele2.component';
import { Sekt2agraafComponent } from '../sekt2agraaf/sekt2agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sekt2a-component',
  templateUrl: './sekt2a.component.html',
  styleUrls: ['./sekt2a.component.scss'],
  standalone: true,
  imports: [Tabele2Component, Sekt2agraafComponent]
})
export class Sekt2aComponent {
  
}
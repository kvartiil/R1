import { Component } from '@angular/core';
import { Tabele1Component } from '../tabele1/tabele1.component';
import { Sekt1agraafComponent } from '../sekt1agraaf/sekt1agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sekt1a-component',
  templateUrl: './sekt1a.component.html',
  styleUrls: ['./sekt1a.component.scss'],
  imports: [Tabele1Component, Sekt1agraafComponent],
  standalone: true
})
export class Sekt1aComponent {
  
}
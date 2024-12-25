import { Component } from '@angular/core';
import { Tabele3Component } from '../tabele3/tabele3.component';
import { Sekt3agraafComponent } from '../sekt3agraaf/sekt3agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sekt3a-component',
  templateUrl: './sekt3a.component.html',
  styleUrls: ['./sekt3a.component.scss'],
  standalone: true,
  imports: [Tabele3Component, Sekt3agraafComponent]
})
export class Sekt3aComponent {
  
}
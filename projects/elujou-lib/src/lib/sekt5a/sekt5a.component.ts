import { Component } from '@angular/core';
import { Tabele5Component } from '../tabele5/tabele5.component';
import { Sekt5agraafComponent } from '../sekt5agraaf/sekt5agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sekt5a-component',
  templateUrl: './sekt5a.component.html',
  styleUrls: ['./sekt5a.component.scss'],
  standalone: true,
  imports: [Tabele5Component, Sekt5agraafComponent]
})
export class Sekt5aComponent {
  
}
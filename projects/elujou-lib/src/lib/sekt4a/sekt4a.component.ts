import { Component } from '@angular/core';
import { Tabele4Component } from '../tabele4/tabele4.component';
import { Sekt4agraafComponent } from '../sekt4agraaf/sekt4agraaf.component';

//import { products } from '../products';

@Component({
  selector: 'sekt4a-component',
  templateUrl: './sekt4a.component.html',
  styleUrls: ['./sekt4a.component.scss'],
  standalone: true,
  imports: [Tabele4Component, Sekt4agraafComponent]
})
export class Sekt4aComponent {
  
}
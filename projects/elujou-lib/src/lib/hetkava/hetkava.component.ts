import { Component } from '@angular/core';
import { Graaf12Component } from '../graaf12/graaf12.component';

//import { products } from '../products';

@Component({
  selector: 'hetkava-component',
  templateUrl: './hetkava.component.html',
  styleUrls: ['./hetkava.component.scss'],
  standalone: true,
  imports: [Graaf12Component]
})
export class HetkavaComponent {
  
}
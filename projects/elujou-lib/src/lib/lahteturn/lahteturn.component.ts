import { Component } from '@angular/core';
import { LahteinfoComponent } from '../lahteinfo/lahteinfo.component';
import { LahteinfobackComponent } from '../lahteinfoback/lahteinfoback.component';

//import { products } from '../products';

@Component({
  selector: 'lahteturn-component',
  templateUrl: './lahteturn.component.html',
  styleUrls: ['./lahteturn.component.scss'],
  standalone: true,
  imports: [LahteinfoComponent, LahteinfobackComponent]
})
export class LahteturnComponent {

  flipped = false;
  //imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkL8GlKZ775j3f0VVgS1rU8L2LoX5UEM6fKv_eGLzeza27WYH"

  toggle() {
    this.flipped = !this.flipped;
  }
  
}
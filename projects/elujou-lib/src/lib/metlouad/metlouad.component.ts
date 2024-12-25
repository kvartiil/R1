import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Metraport2Component } from '../metraport2/metraport2.component';

//import { products } from '../products';

@Component({
  selector: 'metlouad-component',
  templateUrl: './metlouad.component.html',
  styleUrls: ['./metlouad.component.scss'],
  standalone: true,
  imports: [CommonModule, Metraport2Component]
})
export class MetlouadComponent {

ReadMore:boolean = true
visible:boolean = false

onclick()
  {
    this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible
    //alert("lgaj");
  }
  
}
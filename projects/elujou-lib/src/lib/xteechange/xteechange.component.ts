import { Component } from '@angular/core';
import { xtee } from '../xtee/xtee';

//import { products } from '../products';

@Component({
  selector: 'xteechange-component',
  templateUrl: './xteechange.component.html',
  styleUrls: ['./xteechange.component.scss'],
  standalone: true
})
export class XteechangeComponent {

  model1y1: number;
  model1y2: number;
  model1y3: number;

  model2y1: number;
  model2y2: number;
  model2y3: number;

  model3y1: number;
  model3y2: number;
  model3y3: number;

  model4y1: number;
  model4y2: number;
  model4y3: number;

  model5y1: number;
  model5y2: number;
  model5y3: number;

  constructor() {
    this.model1y1 = xtee.model3y1;  //Kmodel3 -> mine model1
    this.model1y2 = xtee.model3y2;  //Kmodel3 -> mine model1
    this.model1y3 = xtee.model3y3;  //Kmodel3 -> mine model1

    this.model2y1 = xtee.model1y1;  //Kmodel1 -> mine model2
    this.model2y2 = xtee.model1y2;  //Kmodel1 -> mine model2
    this.model2y3 = xtee.model1y3;  //Kmodel1 -> mine 
    
    this.model3y1 = xtee.model4y1;  //Kmodel4 -> mine model3
    this.model3y2 = xtee.model4y2;  //Kmodel4 -> mine model3
    this.model3y3 = xtee.model4y3;  //Kmodel4 -> mine model3

    this.model4y1 = xtee.model2y1;  //Kmodel2 -> mine model4
    this.model4y2 = xtee.model2y2;  //Kmodel2 -> mine model4
    this.model4y3 = xtee.model2y3;  //Kmodel2 -> mine model4

    this.model5y1 = xtee.model5y1;  //Kmodel5 -> mine model5
    this.model5y2 = xtee.model5y2;  //Kmodel5 -> mine model5
    this.model5y3 = xtee.model5y3;  //Kmodel5 -> mine model5
 
    
    
  }
  
}



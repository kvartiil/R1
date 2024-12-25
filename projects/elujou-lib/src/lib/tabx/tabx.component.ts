import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Yld1Component } from '../yld1/yld1.component';
import { HetkavaComponent } from '../hetkava/hetkava.component';
import { Yld2Component } from '../yld2/yld2.component';
import { Yld3Component } from '../yld3/yld3.component';
import { Yld4Component } from '../yld4/yld4.component';
import { Graaf10Component } from '../graaf10/graaf10.component';
import { Yld6Component } from '../yld6/yld6.component';
import { Varav3Component } from '../varav3/varav3.component';
import { Varav4aComponent} from '../varav4a/varav4a.component';
import { Varav5Component } from '../varav5/varav5.component';
import { Varav6Component } from '../varav6/varav6.component';
import { Varav7Component } from '../varav7/varav7.component';
import { Varav8Component } from '../varav8/varav8.component';
import { Varav9Component } from '../varav9/varav9.component';
import { Varav10Component } from '../varav10/varav10.component';
import { Varav11Component } from '../varav11/varav11.component';
import { Hetk1Component } from '../hetk1/hetk1.component';
import { Hetk3Component } from '../hetk3/hetk3.component';
import { KonsultantComponent } from '../konsultant/konsultant.component';
import { KonsultantAvaComponent } from '../konsultantava/konsultantava.component';
import { KonsultantInfoComponent } from '../konsultantinfo/konsultantinfo.component';
import { VarvidComponent } from '../varvid/varvid.component';
import { Motle1Component } from '../motle1/motle1.component';
import { MettextComponent } from '../mettext/mettext.component';
import { MetlouadComponent } from '../metlouad/metlouad.component';
import { Sisend1Component } from '../sisend1/sisend1.component';
import { Sisend2Component } from '../sisend2/sisend2.component';
import { Sekt1agraafComponent } from '../sekt1agraaf/sekt1agraaf.component';
import { Rnote } from '../rnote/rnote.component';


@Component({
  selector: 'app-tab',
  standalone: true,
  templateUrl: './tabx.component.html',
  styleUrls: ['./tabx.component.scss'],
  imports: [Yld1Component, HetkavaComponent, Yld2Component, Yld3Component, Yld4Component,  Graaf10Component, Yld6Component, Varav3Component, Varav4aComponent, Varav5Component, Varav6Component, Varav7Component, Varav8Component, Varav9Component, Varav10Component, Varav11Component, Hetk1Component, Hetk3Component, KonsultantComponent, KonsultantAvaComponent, KonsultantInfoComponent, VarvidComponent, Motle1Component, MettextComponent, MetlouadComponent, Sisend1Component, Sisend2Component, Sekt1agraafComponent, Rnote]
})
export class TabComponent {//} implements OnInit {
  //myForm: FormGroup
  //constructor(private fb: FormBuilder) {
  //  this.buildForm()
  // }

  //buildForm(){
  //  this.myForm = this.fb.group({
  //    buyInAmount: ['', Validators.required],
  //    buyInGrams: ['', Validators.required]
  //  })
  //}


  //ngOnInit() {
  //}

}
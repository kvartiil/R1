import { CommonModule } from '@angular/common';
import { ElujoutestComponent } from './elujoutest/elujoutest.component';
import { NgModule } from '@angular/core';

import { ElujouLibComponent } from './elujou-lib.component';
import { ElujouLib2Component } from './elujou-lib2/elujou-lib2.component';
//import { UustestComponent } from './elujou-uustest/elujou-uustest.component';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule, ElujoutestComponent, ElujouLib2Component
  ],
  exports: [ElujoutestComponent]

  //providers: [ProfileService, CompilerService],

  //bootstrap: [
  //  ElujouLibComponent
  //]
})
export class ElujouLibModule { }
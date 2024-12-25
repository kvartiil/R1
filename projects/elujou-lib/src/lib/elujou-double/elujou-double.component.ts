import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
          <h1>Parent Component</h1>
          <!--child></child-->
      `
  })
  export class ParentComponent{}


@Component({
  selector: 'child',    
  template: `
          <h4>Child Component</h4>
      `
  })
  export class ChildComponent{}
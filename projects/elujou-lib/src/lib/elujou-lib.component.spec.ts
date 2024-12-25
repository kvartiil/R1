import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElujouLibComponent } from './elujou-lib.component';

describe('ElujouLibComponent', () => {
  let component: ElujouLibComponent;
  let fixture: ComponentFixture<ElujouLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElujouLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElujouLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

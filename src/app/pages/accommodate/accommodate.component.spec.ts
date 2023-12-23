import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodateComponent } from './accommodate.component';

describe('AccommodateComponent', () => {
  let component: AccommodateComponent;
  let fixture: ComponentFixture<AccommodateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccommodateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccommodateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

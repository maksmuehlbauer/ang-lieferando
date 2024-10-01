import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFeedbackComponent } from './pay-feedback.component';

describe('PayFeedbackComponent', () => {
  let component: PayFeedbackComponent;
  let fixture: ComponentFixture<PayFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayFeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComnpanyInformationComponent } from './comnpany-information.component';

describe('ComnpanyInformationComponent', () => {
  let component: ComnpanyInformationComponent;
  let fixture: ComponentFixture<ComnpanyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComnpanyInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComnpanyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

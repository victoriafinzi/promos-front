import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoRegistrationComponent } from './promo-registration.component';

describe('PromoRegistrationComponent', () => {
  let component: PromoRegistrationComponent;
  let fixture: ComponentFixture<PromoRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoRegistrationComponent]
    });
    fixture = TestBed.createComponent(PromoRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

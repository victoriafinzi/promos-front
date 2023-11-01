import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromosDashboardComponent } from './promos-dashboard.component';

describe('PromosDashboardComponent', () => {
  let component: PromosDashboardComponent;
  let fixture: ComponentFixture<PromosDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromosDashboardComponent]
    });
    fixture = TestBed.createComponent(PromosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

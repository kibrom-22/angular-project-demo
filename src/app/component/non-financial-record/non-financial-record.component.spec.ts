import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonFinancialRecordComponent } from './non-financial-record.component';

describe('NonFinancialRecordComponent', () => {
  let component: NonFinancialRecordComponent;
  let fixture: ComponentFixture<NonFinancialRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonFinancialRecordComponent]
    });
    fixture = TestBed.createComponent(NonFinancialRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceDataManagerComponent } from './reference-data-manager.component';

describe('ReferenceDataManagerComponent', () => {
  let component: ReferenceDataManagerComponent;
  let fixture: ComponentFixture<ReferenceDataManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenceDataManagerComponent]
    });
    fixture = TestBed.createComponent(ReferenceDataManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

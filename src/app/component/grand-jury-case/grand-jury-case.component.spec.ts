import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandJuryCaseComponent } from './grand-jury-case.component';

describe('GrandJuryCaseComponent', () => {
  let component: GrandJuryCaseComponent;
  let fixture: ComponentFixture<GrandJuryCaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandJuryCaseComponent]
    });
    fixture = TestBed.createComponent(GrandJuryCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

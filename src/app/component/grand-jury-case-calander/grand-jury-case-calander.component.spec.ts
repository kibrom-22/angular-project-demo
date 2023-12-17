import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandJuryCaseCalanderComponent } from './grand-jury-case-calander.component';

describe('GrandJuryCaseCalanderComponent', () => {
  let component: GrandJuryCaseCalanderComponent;
  let fixture: ComponentFixture<GrandJuryCaseCalanderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandJuryCaseCalanderComponent]
    });
    fixture = TestBed.createComponent(GrandJuryCaseCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

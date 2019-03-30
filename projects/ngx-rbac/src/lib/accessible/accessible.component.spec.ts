import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleComponent } from './accessible.component';

describe('AccessibleComponent', () => {
  let component: AccessibleComponent;
  let fixture: ComponentFixture<AccessibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgoveranceComponent } from './egoverance.component';

describe('EgoveranceComponent', () => {
  let component: EgoveranceComponent;
  let fixture: ComponentFixture<EgoveranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgoveranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgoveranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

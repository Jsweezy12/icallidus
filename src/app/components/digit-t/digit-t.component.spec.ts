import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitTComponent } from './digit-t.component';

describe('DigitTComponent', () => {
  let component: DigitTComponent;
  let fixture: ComponentFixture<DigitTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

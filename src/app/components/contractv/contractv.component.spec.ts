import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractvComponent } from './contractv.component';

describe('ContractvComponent', () => {
  let component: ContractvComponent;
  let fixture: ComponentFixture<ContractvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

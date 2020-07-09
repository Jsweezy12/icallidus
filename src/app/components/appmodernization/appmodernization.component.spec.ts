import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppmodernizationComponent } from './appmodernization.component';

describe('AppmodernizationComponent', () => {
  let component: AppmodernizationComponent;
  let fixture: ComponentFixture<AppmodernizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppmodernizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppmodernizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

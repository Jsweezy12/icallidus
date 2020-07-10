import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataanalyticsComponent } from './dataanalytics.component';

describe('DataanalyticsComponent', () => {
  let component: DataanalyticsComponent;
  let fixture: ComponentFixture<DataanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

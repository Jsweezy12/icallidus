import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSSComponent } from './enterprise-ss.component';

describe('EnterpriseSSComponent', () => {
  let component: EnterpriseSSComponent;
  let fixture: ComponentFixture<EnterpriseSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseSSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeholdningListComponent } from './beholdning-list.component';

describe('BeholdningListComponent', () => {
  let component: BeholdningListComponent;
  let fixture: ComponentFixture<BeholdningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeholdningListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeholdningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

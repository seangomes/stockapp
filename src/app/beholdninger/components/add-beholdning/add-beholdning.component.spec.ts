import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeholdningComponent } from './add-beholdning.component';

describe('AddBeholdningComponent', () => {
  let component: AddBeholdningComponent;
  let fixture: ComponentFixture<AddBeholdningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBeholdningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeholdningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

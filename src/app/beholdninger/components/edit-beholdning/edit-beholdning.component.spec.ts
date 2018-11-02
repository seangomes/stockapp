import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBeholdningComponent } from './edit-beholdning.component';

describe('EditBeholdningComponent', () => {
  let component: EditBeholdningComponent;
  let fixture: ComponentFixture<EditBeholdningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBeholdningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBeholdningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

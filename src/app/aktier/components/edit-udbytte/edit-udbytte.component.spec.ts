import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUdbytteComponent } from './edit-udbytte.component';

describe('EditUdbytteComponent', () => {
  let component: EditUdbytteComponent;
  let fixture: ComponentFixture<EditUdbytteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUdbytteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUdbytteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

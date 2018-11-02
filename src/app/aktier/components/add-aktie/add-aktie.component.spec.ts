import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAktieComponent } from './add-aktie.component';

describe('AddAktieComponent', () => {
  let component: AddAktieComponent;
  let fixture: ComponentFixture<AddAktieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAktieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAktieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

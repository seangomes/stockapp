import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktieListComponent } from './aktie-list.component';

describe('AktieListComponent', () => {
  let component: AktieListComponent;
  let fixture: ComponentFixture<AktieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

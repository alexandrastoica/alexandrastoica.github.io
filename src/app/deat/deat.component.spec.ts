import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatComponent } from './deat.component';

describe('DeatComponent', () => {
  let component: DeatComponent;
  let fixture: ComponentFixture<DeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

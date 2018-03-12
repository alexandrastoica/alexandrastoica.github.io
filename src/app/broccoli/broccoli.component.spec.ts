import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroccoliComponent } from './broccoli.component';

describe('BroccoliComponent', () => {
  let component: BroccoliComponent;
  let fixture: ComponentFixture<BroccoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroccoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroccoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

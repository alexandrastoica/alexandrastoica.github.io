import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotatoconComponent } from './potatocon.component';

describe('PotatoconComponent', () => {
  let component: PotatoconComponent;
  let fixture: ComponentFixture<PotatoconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotatoconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

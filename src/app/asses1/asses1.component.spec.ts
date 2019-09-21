import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asses1Component } from './asses1.component';

describe('Asses1Component', () => {
  let component: Asses1Component;
  let fixture: ComponentFixture<Asses1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asses1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asses1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

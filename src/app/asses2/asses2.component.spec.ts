import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Asses2Component } from './asses2.component';

describe('Asses2Component', () => {
  let component: Asses2Component;
  let fixture: ComponentFixture<Asses2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Asses2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Asses2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

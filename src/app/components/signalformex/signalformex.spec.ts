import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signalformex } from './signalformex';

describe('Signalformex', () => {
  let component: Signalformex;
  let fixture: ComponentFixture<Signalformex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signalformex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signalformex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

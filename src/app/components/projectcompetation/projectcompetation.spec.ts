import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectcompetation } from './projectcompetation';

describe('Projectcompetation', () => {
  let component: Projectcompetation;
  let fixture: ComponentFixture<Projectcompetation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projectcompetation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projectcompetation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

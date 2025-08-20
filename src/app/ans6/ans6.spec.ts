import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ans6 } from './ans6';

describe('Ans6', () => {
  let component: Ans6;
  let fixture: ComponentFixture<Ans6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ans6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ans6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

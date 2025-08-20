import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ans5 } from './ans5';

describe('Ans5', () => {
  let component: Ans5;
  let fixture: ComponentFixture<Ans5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ans5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ans5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ans4 } from './ans4';

describe('Ans4', () => {
  let component: Ans4;
  let fixture: ComponentFixture<Ans4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ans4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ans4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

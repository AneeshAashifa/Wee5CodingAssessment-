import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ans1 } from './ans1';

describe('Ans1', () => {
  let component: Ans1;
  let fixture: ComponentFixture<Ans1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ans1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ans1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

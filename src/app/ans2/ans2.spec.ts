import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ans2 } from './ans2';

describe('Ans2', () => {
  let component: Ans2;
  let fixture: ComponentFixture<Ans2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ans2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ans2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ans7 } from './ans7';

describe('Ans7', () => {
  let component: Ans7;
  let fixture: ComponentFixture<Ans7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ans7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ans7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

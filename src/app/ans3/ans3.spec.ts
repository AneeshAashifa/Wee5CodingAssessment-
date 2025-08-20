import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ans3 } from './ans3';

describe('Ans3', () => {
  let component: Ans3;
  let fixture: ComponentFixture<Ans3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ans3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ans3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

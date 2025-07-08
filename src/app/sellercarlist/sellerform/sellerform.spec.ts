import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sellerform } from './sellerform';

describe('Sellerform', () => {
  let component: Sellerform;
  let fixture: ComponentFixture<Sellerform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sellerform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sellerform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

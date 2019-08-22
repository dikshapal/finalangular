import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycashComponent } from './paycash.component';

describe('PaycashComponent', () => {
  let component: PaycashComponent;
  let fixture: ComponentFixture<PaycashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaycashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

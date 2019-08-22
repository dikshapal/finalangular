import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagedComponent } from './packaged.component';

describe('PackagedComponent', () => {
  let component: PackagedComponent;
  let fixture: ComponentFixture<PackagedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackagedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestpastreqComponent } from './restpastreq.component';

describe('RestpastreqComponent', () => {
  let component: RestpastreqComponent;
  let fixture: ComponentFixture<RestpastreqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestpastreqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestpastreqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

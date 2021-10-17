import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisfailedComponent } from './regisfailed.component';

describe('RegisfailedComponent', () => {
  let component: RegisfailedComponent;
  let fixture: ComponentFixture<RegisfailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisfailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisfailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisscesComponent } from './regissces.component';

describe('RegisscesComponent', () => {
  let component: RegisscesComponent;
  let fixture: ComponentFixture<RegisscesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisscesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisscesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

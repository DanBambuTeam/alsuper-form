import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpwfailedComponent } from './resetpwfailed.component';

describe('ResetpwfailedComponent', () => {
  let component: ResetpwfailedComponent;
  let fixture: ComponentFixture<ResetpwfailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpwfailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpwfailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

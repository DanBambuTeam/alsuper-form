import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpwscessComponent } from './resetpwscess.component';

describe('ResetpwscessComponent', () => {
  let component: ResetpwscessComponent;
  let fixture: ComponentFixture<ResetpwscessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetpwscessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetpwscessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

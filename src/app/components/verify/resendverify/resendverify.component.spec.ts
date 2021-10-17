import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendverifyComponent } from './resendverify.component';

describe('ResendverifyComponent', () => {
  let component: ResendverifyComponent;
  let fixture: ComponentFixture<ResendverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

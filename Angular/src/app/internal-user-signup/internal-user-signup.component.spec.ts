import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalUserSignupComponent } from './internal-user-signup.component';

describe('InternalUserSignupComponent', () => {
  let component: InternalUserSignupComponent;
  let fixture: ComponentFixture<InternalUserSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalUserSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalUserSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

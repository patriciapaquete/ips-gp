import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveUserComponent } from './aprove-user.component';

describe('AproveUserComponent', () => {
  let component: AproveUserComponent;
  let fixture: ComponentFixture<AproveUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproveUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

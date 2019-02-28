import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsInvitationsComponent } from './requests-invitations.component';

describe('RequestsInvitationsComponent', () => {
  let component: RequestsInvitationsComponent;
  let fixture: ComponentFixture<RequestsInvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsInvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponentDialog } from '../../../../src/app/features/admin/dashboard/submission-table/vote/vote.component';

describe('VoteComponentDialog', () => {
  let component: VoteComponentDialog;
  let fixture: ComponentFixture<VoteComponentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteComponentDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

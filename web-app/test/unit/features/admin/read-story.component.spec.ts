import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadStoryComponentDialog } from '../../../../src/app/features/admin/dashboard/submission-table/read-story/read-story.component';

describe('ReadStoryComponentDialog', () => {
  let component: ReadStoryComponentDialog;
  let fixture: ComponentFixture<ReadStoryComponentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadStoryComponentDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadStoryComponentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

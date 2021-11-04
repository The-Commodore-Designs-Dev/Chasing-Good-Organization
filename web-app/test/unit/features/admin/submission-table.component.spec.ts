import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionTableComponent } from '../../../../src/app/features/admin/dashboard/submission-table/submission-table.component';

describe('SubmissionTableComponent', () => {
  let component: SubmissionTableComponent;
  let fixture: ComponentFixture<SubmissionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

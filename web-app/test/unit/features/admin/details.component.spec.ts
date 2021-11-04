import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponentDialog } from '../../../../src/app/features/admin/dashboard/submission-table/details/details.component';

describe('DetailsComponentDialog', () => {
  let component: DetailsComponentDialog;
  let fixture: ComponentFixture<DetailsComponentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponentDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

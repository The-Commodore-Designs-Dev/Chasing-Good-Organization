import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponentDialog } from '../../../../src/app/features/admin/dashboard/submission-table/contact/contact.component';

describe('ContactComponentDialog', () => {
  let component: ContactComponentDialog;
  let fixture: ComponentFixture<ContactComponentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponentDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

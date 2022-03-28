import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenseandconsentagreementDialog } from '../../../src/app/dialogs/licenseandconsentagreementdialog/licenseandconsentagreementdialog.component';

describe('LicenseandconsentagreementDialog', () => {
  let component: LicenseandconsentagreementDialog;
  let fixture: ComponentFixture<LicenseandconsentagreementDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenseandconsentagreementDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenseandconsentagreementDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

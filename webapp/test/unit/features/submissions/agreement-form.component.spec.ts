import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementFormComponent } from '../../../../src/app/features/submissions/agreement-form/agreement-form.component';

describe('AgreementFormComponent', () => {
  let component: AgreementFormComponent;
  let fixture: ComponentFixture<AgreementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

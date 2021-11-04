import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoFormComponent } from '../../../../src/app/features/submissions/basic-info-form/basic-info-form.component';

describe('BasicInfoFormComponent', () => {
  let component: BasicInfoFormComponent;
  let fixture: ComponentFixture<BasicInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

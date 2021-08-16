import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominationDetailsFormComponent } from './nomination-details-form.component';

describe('NominationDetailsFormComponent', () => {
  let component: NominationDetailsFormComponent;
  let fixture: ComponentFixture<NominationDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominationDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominationDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingGoodFormComponent } from '../../../../src/app/features/submissions/doing-good-form/doing-good-form.component';

describe('DoingGoodFormComponent', () => {
  let component: DoingGoodFormComponent;
  let fixture: ComponentFixture<DoingGoodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoingGoodFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingGoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

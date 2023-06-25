import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingGoodFormComponent } from './doing-good-form.component';

describe('DoingGoodFormComponent', () => {
  let component: DoingGoodFormComponent;
  let fixture: ComponentFixture<DoingGoodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoingGoodFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoingGoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

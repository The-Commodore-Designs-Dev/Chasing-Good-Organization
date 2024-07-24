import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessage } from './error.component';

describe('ErrorMessage', () => {
  let component: ErrorMessage;
  let fixture: ComponentFixture<ErrorMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMessage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

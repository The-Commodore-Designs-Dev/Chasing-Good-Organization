import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentMessage } from './sent.component';

describe('SentMessage', () => {
  let component: SentMessage;
  let fixture: ComponentFixture<SentMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentMessage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

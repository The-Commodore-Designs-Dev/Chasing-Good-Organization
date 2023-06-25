import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheWinnersComponent } from './meet-the-winners.component';

describe('MeetTheWinnersComponent', () => {
  let component: MeetTheWinnersComponent;
  let fixture: ComponentFixture<MeetTheWinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetTheWinnersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MeetTheWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

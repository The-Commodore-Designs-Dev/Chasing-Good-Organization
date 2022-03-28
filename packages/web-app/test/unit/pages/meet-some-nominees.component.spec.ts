import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetSomeNomineesComponent } from '../../../src/app/pages/meet-some-nominees/meet-some-nominees.component';

describe('MeetSomeNomineesComponent', () => {
  let component: MeetSomeNomineesComponent;
  let fixture: ComponentFixture<MeetSomeNomineesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetSomeNomineesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetSomeNomineesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

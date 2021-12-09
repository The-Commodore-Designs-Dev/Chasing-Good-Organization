import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchVideoComponentDialog } from '../../../../src/app/features/admin/dashboard/submission-table/watch-video/watch-video.component';

describe('WatchVideoComponentDialog', () => {
  let component: WatchVideoComponentDialog;
  let fixture: ComponentFixture<WatchVideoComponentDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchVideoComponentDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchVideoComponentDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

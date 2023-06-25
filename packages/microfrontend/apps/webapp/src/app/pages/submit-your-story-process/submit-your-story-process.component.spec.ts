import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitYourStoryProcessComponent } from './submit-your-story-process.component';

describe('SubmitYourStoryProcessComponent', () => {
  let component: SubmitYourStoryProcessComponent;
  let fixture: ComponentFixture<SubmitYourStoryProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitYourStoryProcessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitYourStoryProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

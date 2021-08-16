import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitYourStoryComponent } from './submit-your-story.component';

describe('SubmitYourStoryComponent', () => {
  let component: SubmitYourStoryComponent;
  let fixture: ComponentFixture<SubmitYourStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitYourStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitYourStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

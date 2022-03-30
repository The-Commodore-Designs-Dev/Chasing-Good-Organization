import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDetailsFormComponent } from '../../../../src/app/features/submissions/story-details-form/story-details-form.component';

describe('StoryDetailsFormComponent', () => {
  let component: StoryDetailsFormComponent;
  let fixture: ComponentFixture<StoryDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

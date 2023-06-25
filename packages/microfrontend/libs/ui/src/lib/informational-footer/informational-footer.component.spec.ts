import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationalFooterComponent } from './informational-footer.component';

describe('InformationalFooterComponent', () => {
  let component: InformationalFooterComponent;
  let fixture: ComponentFixture<InformationalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformationalFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InformationalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightFooterComponent } from './copyright-footer.component';

describe('CopyrightFooterComponent', () => {
  let component: CopyrightFooterComponent;
  let fixture: ComponentFixture<CopyrightFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CopyrightFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CopyrightFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

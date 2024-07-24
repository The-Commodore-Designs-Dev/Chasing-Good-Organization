import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsofuseComponent } from '../../../src/app/pages/termsofuse/termsofuse.component';

describe('TermsofuseComponent', () => {
  let component: TermsofuseComponent;
  let fixture: ComponentFixture<TermsofuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsofuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsofuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

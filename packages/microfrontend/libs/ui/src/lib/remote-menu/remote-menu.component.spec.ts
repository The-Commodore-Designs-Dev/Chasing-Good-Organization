import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteMenuComponent } from './remote-menu.component';

describe('RemoteMenuComponent', () => {
  let component: RemoteMenuComponent;
  let fixture: ComponentFixture<RemoteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoteMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RemoteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

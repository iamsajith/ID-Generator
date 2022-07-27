import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderControlsComponent } from './header-controls.component';

describe('HeaderControlsComponent', () => {
  let component: HeaderControlsComponent;
  let fixture: ComponentFixture<HeaderControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

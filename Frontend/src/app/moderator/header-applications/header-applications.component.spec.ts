import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderApplicationsComponent } from './header-applications.component';

describe('HeaderApplicationsComponent', () => {
  let component: HeaderApplicationsComponent;
  let fixture: ComponentFixture<HeaderApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

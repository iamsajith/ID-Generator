import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModComponent } from './header-mod.component';

describe('HeaderModComponent', () => {
  let component: HeaderModComponent;
  let fixture: ComponentFixture<HeaderModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

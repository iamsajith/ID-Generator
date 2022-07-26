import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHistoryComponent } from './header-history.component';

describe('HeaderHistoryComponent', () => {
  let component: HeaderHistoryComponent;
  let fixture: ComponentFixture<HeaderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

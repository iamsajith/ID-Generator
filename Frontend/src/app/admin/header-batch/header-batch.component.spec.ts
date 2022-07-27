import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBatchComponent } from './header-batch.component';

describe('HeaderBatchComponent', () => {
  let component: HeaderBatchComponent;
  let fixture: ComponentFixture<HeaderBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

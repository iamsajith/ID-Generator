import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchManagerComponent } from './batch-manager.component';

describe('BatchManagerComponent', () => {
  let component: BatchManagerComponent;
  let fixture: ComponentFixture<BatchManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcHeaderComponent } from './fc-header.component';

describe('FcHeaderComponent', () => {
  let component: FcHeaderComponent;
  let fixture: ComponentFixture<FcHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

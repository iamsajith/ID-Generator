import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmHeaderComponent } from './bm-header.component';

describe('BmHeaderComponent', () => {
  let component: BmHeaderComponent;
  let fixture: ComponentFixture<BmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

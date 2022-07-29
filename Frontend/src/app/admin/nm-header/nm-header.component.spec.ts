import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmHeaderComponent } from './nm-header.component';

describe('NmHeaderComponent', () => {
  let component: NmHeaderComponent;
  let fixture: ComponentFixture<NmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

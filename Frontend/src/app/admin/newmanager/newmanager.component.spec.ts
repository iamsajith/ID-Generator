import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmanagerComponent } from './newmanager.component';

describe('NewmanagerComponent', () => {
  let component: NewmanagerComponent;
  let fixture: ComponentFixture<NewmanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEComponent } from './add-e.component';

describe('AddEComponent', () => {
  let component: AddEComponent;
  let fixture: ComponentFixture<AddEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEComponent]
    });
    fixture = TestBed.createComponent(AddEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

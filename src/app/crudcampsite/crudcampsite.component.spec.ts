import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudcampsiteComponent } from './crudcampsite.component';

describe('CrudcampsiteComponent', () => {
  let component: CrudcampsiteComponent;
  let fixture: ComponentFixture<CrudcampsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudcampsiteComponent]
    });
    fixture = TestBed.createComponent(CrudcampsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

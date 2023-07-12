import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcampsitesComponent } from './listcampsites.component';

describe('ListcampsitesComponent', () => {
  let component: ListcampsitesComponent;
  let fixture: ComponentFixture<ListcampsitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListcampsitesComponent]
    });
    fixture = TestBed.createComponent(ListcampsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

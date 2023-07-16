import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcampsiteComponent } from './detailcampsite.component';

describe('DetailcampsiteComponent', () => {
  let component: DetailcampsiteComponent;
  let fixture: ComponentFixture<DetailcampsiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcampsiteComponent]
    });
    fixture = TestBed.createComponent(DetailcampsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

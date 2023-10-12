import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudListComponent } from './stud-list.component';

describe('StudListComponent', () => {
  let component: StudListComponent;
  let fixture: ComponentFixture<StudListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudListComponent]
    });
    fixture = TestBed.createComponent(StudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

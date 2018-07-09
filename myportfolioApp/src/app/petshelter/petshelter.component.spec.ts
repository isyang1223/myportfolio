import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetshelterComponent } from './petshelter.component';

describe('PetshelterComponent', () => {
  let component: PetshelterComponent;
  let fixture: ComponentFixture<PetshelterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetshelterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetshelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

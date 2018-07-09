import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatsumaComponent } from './satsuma.component';

describe('SatsumaComponent', () => {
  let component: SatsumaComponent;
  let fixture: ComponentFixture<SatsumaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatsumaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

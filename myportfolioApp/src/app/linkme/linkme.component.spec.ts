import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkmeComponent } from './linkme.component';

describe('LinkmeComponent', () => {
  let component: LinkmeComponent;
  let fixture: ComponentFixture<LinkmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginTopComponent } from './margin-top.component';

describe('MarginTopComponent', () => {
  let component: MarginTopComponent;
  let fixture: ComponentFixture<MarginTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarginTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

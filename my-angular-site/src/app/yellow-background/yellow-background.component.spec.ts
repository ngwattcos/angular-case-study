import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YellowBackgroundComponent } from './yellow-background.component';

describe('YellowBackgroundComponent', () => {
  let component: YellowBackgroundComponent;
  let fixture: ComponentFixture<YellowBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

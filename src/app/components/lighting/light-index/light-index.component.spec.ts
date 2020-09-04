import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightIndexComponent } from './light-index.component';

describe('LightIndexComponent', () => {
  let component: LightIndexComponent;
  let fixture: ComponentFixture<LightIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

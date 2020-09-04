import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightEngineeringComponent } from './light-engineering.component';

describe('LightEngineeringComponent', () => {
  let component: LightEngineeringComponent;
  let fixture: ComponentFixture<LightEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

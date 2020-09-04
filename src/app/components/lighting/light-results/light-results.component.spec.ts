import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightResultsComponent } from './light-results.component';

describe('LightResultsComponent', () => {
  let component: LightResultsComponent;
  let fixture: ComponentFixture<LightResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebuildFinishingComponent } from './rebuild-finishing.component';

describe('RebuildFinishingComponent', () => {
  let component: RebuildFinishingComponent;
  let fixture: ComponentFixture<RebuildFinishingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebuildFinishingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebuildFinishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

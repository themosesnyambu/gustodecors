import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebuildIndexComponent } from './rebuild-index.component';

describe('RebuildIndexComponent', () => {
  let component: RebuildIndexComponent;
  let fixture: ComponentFixture<RebuildIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebuildIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebuildIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

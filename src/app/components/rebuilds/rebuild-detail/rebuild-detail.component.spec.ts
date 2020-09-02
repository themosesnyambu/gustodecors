import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebuildDetailComponent } from './rebuild-detail.component';

describe('RebuildDetailComponent', () => {
  let component: RebuildDetailComponent;
  let fixture: ComponentFixture<RebuildDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebuildDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebuildDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

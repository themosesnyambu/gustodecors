import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RebuildDesignComponent } from './rebuild-design.component';

describe('RebuildDesignComponent', () => {
  let component: RebuildDesignComponent;
  let fixture: ComponentFixture<RebuildDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RebuildDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RebuildDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

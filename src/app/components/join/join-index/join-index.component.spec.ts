import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinIndexComponent } from './join-index.component';

describe('JoinIndexComponent', () => {
  let component: JoinIndexComponent;
  let fixture: ComponentFixture<JoinIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

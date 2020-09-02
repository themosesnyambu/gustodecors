import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaIndexComponent } from './dna-index.component';

describe('DnaIndexComponent', () => {
  let component: DnaIndexComponent;
  let fixture: ComponentFixture<DnaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

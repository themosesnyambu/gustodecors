import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDnaComponent } from './home-dna.component';

describe('HomeDnaComponent', () => {
  let component: HomeDnaComponent;
  let fixture: ComponentFixture<HomeDnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

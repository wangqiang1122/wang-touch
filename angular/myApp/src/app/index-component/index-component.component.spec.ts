import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentComponent } from './index-component.component';

describe('IndexComponentComponent', () => {
  let component: IndexComponentComponent;
  let fixture: ComponentFixture<IndexComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

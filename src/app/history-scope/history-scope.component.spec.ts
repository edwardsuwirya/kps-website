import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryScopeComponent } from './history-scope.component';

describe('HistoryScopeComponent', () => {
  let component: HistoryScopeComponent;
  let fixture: ComponentFixture<HistoryScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

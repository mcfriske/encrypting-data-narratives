import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProcessorComponent } from './data-processor.component';

describe('DataProcessorComponent', () => {
  let component: DataProcessorComponent;
  let fixture: ComponentFixture<DataProcessorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataProcessorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataProcessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

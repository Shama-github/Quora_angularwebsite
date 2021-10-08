import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetonequestionComponent } from './getonequestion.component';

describe('GetonequestionComponent', () => {
  let component: GetonequestionComponent;
  let fixture: ComponentFixture<GetonequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetonequestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetonequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetoneanswerComponent } from './getoneanswer.component';

describe('GetoneanswerComponent', () => {
  let component: GetoneanswerComponent;
  let fixture: ComponentFixture<GetoneanswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetoneanswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetoneanswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

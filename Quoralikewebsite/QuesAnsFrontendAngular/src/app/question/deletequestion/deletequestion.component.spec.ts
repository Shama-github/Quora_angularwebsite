import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletequestionComponent } from './deletequestion.component';

describe('DeletequestionComponent', () => {
  let component: DeletequestionComponent;
  let fixture: ComponentFixture<DeletequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletequestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

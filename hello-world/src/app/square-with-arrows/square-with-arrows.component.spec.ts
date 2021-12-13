import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareWithArrowsComponent } from './square-with-arrows.component';

describe('SquareWithArrowsComponent', () => {
  let component: SquareWithArrowsComponent;
  let fixture: ComponentFixture<SquareWithArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareWithArrowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareWithArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

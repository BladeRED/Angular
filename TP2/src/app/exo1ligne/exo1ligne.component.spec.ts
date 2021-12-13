import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo1ligneComponent } from './exo1ligne.component';

describe('Exo1ligneComponent', () => {
  let component: Exo1ligneComponent;
  let fixture: ComponentFixture<Exo1ligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo1ligneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo1ligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
